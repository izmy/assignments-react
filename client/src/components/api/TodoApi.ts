import * as v from "valibot";
import { SETTINGS } from "../../main";

const TodoItemSchema = v.object({
    id: v.number(),
    label: v.string(),
    isDone: v.boolean(),
    createdAt: v.number(),
    finishedAt: v.optional(v.number()),
});

export type TodoItem = v.InferOutput<typeof TodoItemSchema>;

export const fetchTodoListItems = async () => {
    const response = await fetch(`${SETTINGS.backendApiUrl}/items`).then((response) => response.json());

    return v.parse(v.array(TodoItemSchema), response);
};

export const createTodoItem = async (label: string) => {
    const response = await fetch(`${SETTINGS.backendApiUrl}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ label }),
    }).then((response) => response.json());

    return v.parse(TodoItemSchema, response);
};

export const updateTodoItem = async (id: number, updatedItem: Partial<TodoItem>) => {
    const response = await fetch(`${SETTINGS.backendApiUrl}/items/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
    }).then((response) => response.json());

    return v.parse(TodoItemSchema, response);
};

export const deleteTodoItem = async (id: number) => {
    await fetch(`${SETTINGS.backendApiUrl}/items/${id}`, {
        method: "DELETE",
    });
};

export const finishTodoItem = async (id: number) => {
    const response = await fetch(`${SETTINGS.backendApiUrl}/items/${id}/done`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone: true }),
    }).then((response) => response.json());

    return v.parse(TodoItemSchema, response);
};
