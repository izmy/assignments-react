import styled from "styled-components";
import type { TodoItem } from "./api/TodoApi";

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: auto;
    gap: 0.5rem;
`;

const ListNoItems = styled.div`
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
                <div key={item.id}>{item.label}</div>
            ))}
        </ListStyled>
    );
};
