import { styled } from "styled-components";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Layout } from "./Layout";
import { List } from "./List";

export const Title = styled.div`
    font-weight: 800;
`;

export const Todo = () => {
    return (
        <Container>
            <Layout>
                <Header onItemAdd={() => console.warn("unimplemented")}>
                    <Title>To Do app 🔥</Title>
                </Header>
                <List />
                <Footer />
            </Layout>
        </Container>
    );
};
