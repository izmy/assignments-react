import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    type TodoItem,
    createTodoItem,
    deleteTodoItem,
    fetchTodoListItems,
    finishTodoItem,
    updateTodoItem,
} from "../api/TodoApi";

const TODOS_QUERY_KEY = "TODOS";

export const useTodoItems = () => {
    return useQuery({ queryKey: [TODOS_QUERY_KEY], queryFn: fetchTodoListItems });
};

export const useCreateTodoItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTodoItem,
        onError: (error) => {
            console.error("onError", error);
        },
        onSettled: async (_, error) => {
            if (error) {
                console.error(error);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: [TODOS_QUERY_KEY],
                });
            }
        },
    });
};

export const useUpdateTodoItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Partial<Omit<TodoItem, "id">> & Pick<TodoItem, "id">) => updateTodoItem(data.id, data),
        onError: (error) => {
            console.error("onError", error);
        },
        onSettled: async (_, error) => {
            if (error) {
                console.error(error);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: [TODOS_QUERY_KEY],
                });
            }
        },
    });
};

export const useDeleteTodoItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTodoItem,
        onError: (error) => {
            console.error("onError", error);
        },
        onSettled: async (_, error) => {
            if (error) {
                console.error(error);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: [TODOS_QUERY_KEY],
                });
            }
        },
    });
};

export const useFinishTodoItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => finishTodoItem(id),
        onError: (error) => {
            console.error("onError", error);
        },
        onSettled: async (_, error) => {
            if (error) {
                console.error(error);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: [TODOS_QUERY_KEY],
                });
            }
        },
    });
};
