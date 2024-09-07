import styled from "styled-components";

/**
 * B2: Fix the Layout component so the Footer is always attached to the bottom of the Layout.
 * There is no need to change when I set List component to flex: auto.
 */
export const Layout = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    max-width: 600px;
    min-height: 50vh;
    margin: 0 30px;
    padding: 20px;

    background-color: rgb(255, 255, 255);
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
    border-radius: 5px;
`;
