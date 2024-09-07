import { styled } from "styled-components";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Layout } from "./Layout";
import { List } from "./List";
import { Spinner } from "./Spinner";
import { useCreateTodoItem, useTodoItems } from "./hooks/useTodoHooks";

export const Title = styled.div`
    font-weight: 800;
`;

export const SpinnerContainer = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const Todo = () => {
    const { data, isPending, isError, error } = useTodoItems();
    const createTodoItem = useCreateTodoItem();

    if (isPending) {
        return (
            <SpinnerContainer>
                <Spinner />
            </SpinnerContainer>
        );
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const todoItems = data ?? [];
    const doneItems = data?.filter((item) => item.isDone).length ?? 0;

    const onItemAdd = (label: string) => {
        createTodoItem.mutate(label);
    };

    return (
        <Container>
            <Layout>
                <Header onItemAdd={onItemAdd}>
                    <Title>To Do app 🔥</Title>
                </Header>
                <List items={todoItems} />
                <Footer todoItems={todoItems.length ?? 0} doneItems={doneItems} />
            </Layout>
        </Container>
    );
};
