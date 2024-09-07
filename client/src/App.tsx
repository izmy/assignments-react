import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Todo } from "./components/Todo";
import { ThemeProvider } from "./components/providers/ThemeProvider";

const queryClient = new QueryClient();

export const App = () => {
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <Todo />
            </QueryClientProvider>
        </ThemeProvider>
    );
};
