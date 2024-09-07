import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import { useState } from "react";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Form } from "./form";

const StyledDiv = styled.div<{ $isDone: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;

    color: ${(props) => (props.$isDone ? props.theme.colors.olive9 : "inherit")};
    text-decoration: ${(props) => (props.$isDone ? "line-through" : "inherit")};
`;

const Label = styled.label`
    flex: 1;
`;

export type ListItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: ListItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [isActionsVisible, setIsActionsVisible] = useState(false);

    const handleItemEdit = (label: string) => {
        onItemLabelEdit(label);
        setIsEditing(false);
    };

    const handleCancelForm = () => {
        setIsEditing(false);
    };

    return (
        <StyledDiv
            $isDone={isDone}
            onMouseEnter={() => setIsActionsVisible(true)}
            onMouseLeave={() => setIsActionsVisible(false)}
        >
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            {isEditing ? (
                <Form initialValue={label} onSubmit={handleItemEdit} onCancel={handleCancelForm} />
            ) : (
                <>
                    <Label>{label}</Label>
                    {isActionsVisible ? (
                        <>
                            <Button onClick={() => setIsEditing(true)} intent="secondary">
                                <Pencil1Icon />
                            </Button>
                            <Button onClick={() => onItemDelete()} intent="danger">
                                <TrashIcon />
                            </Button>
                        </>
                    ) : null}
                </>
            )}
        </StyledDiv>
    );
};
