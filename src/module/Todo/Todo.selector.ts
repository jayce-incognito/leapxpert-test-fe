import { createSelector } from 'reselect';
import { IRootState } from 'src/redux/interface';
import { TODO_MODE, TODO_STATUS } from './Todo.constant';

export const todoSelector = createSelector(
    (state: IRootState) => state.todo,
    (todo) => todo,
);

export const listTodoSelector = createSelector(todoSelector, ({ list, mode }) => {
    switch (mode) {
        case TODO_MODE.ALL:
            return list;
        case TODO_MODE.ACTIVE:
            return list.filter((todo) => todo?.status === TODO_STATUS.ACTIVE);
        case TODO_MODE.DONE:
            return list.filter((todo) => todo?.status === TODO_STATUS.DONE);
        default:
            return list;
    }
});

export const modeActivedSelector = createSelector(todoSelector, ({ mode }) => mode);
