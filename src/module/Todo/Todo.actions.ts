import { ITodo } from './Todo.interface';
import {
    ACTION_ADD_TODO,
    ACTION_REMOVE_TODO,
    ACTION_CHANGE_STATUS,
    ACTION_TOGGLE_ALL_TODO,
    TODO_STATUS,
    ACTION_CHANGE_MODE,
} from './Todo.constant';

export const actionAddTodo = (todo: ITodo) => ({
    type: ACTION_ADD_TODO,
    payload: {
        ...todo,
        status: TODO_STATUS.ACTIVE,
    },
});

export const actionRemoveTodo = (id: string) => ({
    type: ACTION_REMOVE_TODO,
    payload: id,
});

export const actionChangeStatus = (todo: ITodo) => ({
    type: ACTION_CHANGE_STATUS,
    payload: todo,
});

export const actionToggleAllTodo = () => ({
    type: ACTION_TOGGLE_ALL_TODO,
});

export const actionChangeMode = (mode: number) => ({
    type: ACTION_CHANGE_MODE,
    payload: mode,
});
