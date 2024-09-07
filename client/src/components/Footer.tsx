import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;

    padding-top: 1rem;

    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = (props: FooterProps) => {
    const { todoItems, doneItems } = props;

    return (
        <FooterStyled>
            <div>Todo: {todoItems}</div>
            <div>Done: {doneItems}</div>
        </FooterStyled>
    );
};
