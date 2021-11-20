import { ITodo } from './Todo.interface';
import {
    TODO_STATUS,
    ACTION_ADD_TODO,
    ACTION_REMOVE_TODO,
    ACTION_CHANGE_STATUS,
    ACTION_TOGGLE_ALL_TODO,
    TODO_MODE,
    ACTION_CHANGE_MODE,
} from './Todo.constant';

export interface ITodoReducer {
    list: ITodo[];
    mode: number;
}

const initialState: ITodoReducer = {
    list: [],
    mode: TODO_MODE.ALL,
};

const reducer = (
    state = initialState,
    action: {
        type: string;
        payload: any;
    },
) => {
    switch (action.type) {
        case ACTION_ADD_TODO: {
            const todo: ITodo = action.payload;
            return {
                ...state,
                list: [todo, ...state.list],
            };
        }
        case ACTION_REMOVE_TODO: {
            const todoId: string = action.payload;
            return {
                ...state,
                list: state.list.filter((todo) => todo?.id !== todoId),
            };
        }
        case ACTION_CHANGE_STATUS: {
            const todo: ITodo = action.payload;
            return {
                ...state,
                list: state.list.map((i) => (i?.id === todo?.id ? todo : i)),
            };
        }
        case ACTION_TOGGLE_ALL_TODO: {
            return {
                ...state,
                list: state.list.map((todo) => ({ ...todo, status: TODO_STATUS.ACTIVE })),
            };
        }
        case ACTION_CHANGE_MODE: {
            return {
                ...state,
                mode: action.payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
