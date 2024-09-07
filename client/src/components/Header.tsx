import { PlusIcon } from "@radix-ui/react-icons";
import type React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Form } from "./form";

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 1rem;

    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 20rem;
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children } = props;
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);

    const handleItemAdd = (label: string) => {
        props.onItemAdd(label);
        setIsCreateFormVisible(false);
    };

    const handleCancelForm = () => {
        setIsCreateFormVisible(false);
    };

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {isCreateFormVisible ? (
                <FormContainer>
                    <Form initialValue="" onSubmit={handleItemAdd} onCancel={handleCancelForm} />
                </FormContainer>
            ) : (
                <Button onClick={() => setIsCreateFormVisible(true)} intent="primary" rounded>
                    <PlusIcon />
                </Button>
            )}
        </StyledDiv>
    );
};
