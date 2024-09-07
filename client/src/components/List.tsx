import styled from "styled-components";
import { ListItem } from "./ListItem";
import type { TodoItem } from "./api/TodoApi";
import { useDeleteTodoItem, useFinishTodoItem, useUpdateTodoItem } from "./hooks/useTodoHooks";

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: auto;
    gap: 0.5rem;
`;

export const ListNoItems = styled.div`
    display: flex;
    flex: auto;
    gap: 0.5rem;

    align-items: center;
    justify-content: center;

    color: gray;
    color: ${(props) => props.theme.colors.olive9};

    i {
        font-style: italic;
    }
`;

type ListProps = {
    items: TodoItem[];
};

export const List = (props: ListProps) => {
    const { items } = props;

    const deleteTodoItem = useDeleteTodoItem();
    const updateTodoItem = useUpdateTodoItem();
    const finishTodoItem = useFinishTodoItem();

    const handleItemDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this item?")) {
            deleteTodoItem.mutate(id);
        }
    };

    const handleItemLabelEdit = (id: number, label: string) => {
        updateTodoItem.mutate({ id, label });
    };

    const handleItemDoneToggle = (id: number, currentIsDone: boolean) => {
        if (currentIsDone) {
            updateTodoItem.mutate({ id, isDone: false });
        } else {
            finishTodoItem.mutate(id);
        }
    };

    if (items.length === 0) {
        return (
            <ListNoItems>
                <i>No items</i> 🙌
            </ListNoItems>
        );
    }

    return (
        <ListStyled>
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    label={item.label}
                    isDone={item.isDone}
                    onItemLabelEdit={(newLabel) => handleItemLabelEdit(item.id, newLabel)}
                    onItemDelete={() => handleItemDelete(item.id)}
                    onItemDoneToggle={() => handleItemDoneToggle(item.id, item.isDone)}
                />
            ))}
        </ListStyled>
    );
};
