import styled from "styled-components";

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

export const List = () => {
    return (
        <ListNoItems>
            <i>No items</i> 🙌
        </ListNoItems>
    );
};
