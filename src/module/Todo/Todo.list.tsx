import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonRemove, TyniButton } from 'src/components/Core';
import { COLORS } from 'src/styles';
import styled from 'styled-components';
import { actionChangeStatus, TODO_STATUS } from '.';
import { actionRemoveTodo } from './Todo.actions';
import { ITodo } from './Todo.interface';
import { listTodoSelector } from './Todo.selector';

const Styled = styled.div`
    margin: 24px 0;
    height: 200px;
    overflow-x: hidden;
    overflow-y: scroll;
    .todo-item {
        height: 40px;
        border-bottom: solid 1px ${COLORS.colorGreyLight};
        :last-child {
            border-bottom: solid 1px transparent;
        }
    }
    .todo-item .todo-item-value {
        flex: 1;
        margin-right: 15px;
    }
    .todo-item .item-done {
        text-decoration: line-through;
    }
    .todo-item .todo-item-btn {
    }
`;

const TodoItem = React.memo((props: { todo: ITodo }) => {
    const dispatch = useDispatch();
    const { todo } = props;
    if (!todo || !todo.id) {
        return null;
    }
    const { id, value, status } = todo;
    const handleRemoveTodo = () => {
        dispatch(actionRemoveTodo(id));
    };
    const handleChangeStatus = () => {
        let _status = -1;
        switch (status) {
            case TODO_STATUS.ACTIVE:
                _status = TODO_STATUS.DONE;
                break;
            case TODO_STATUS.DONE:
                _status = TODO_STATUS.ACTIVE;
                break;
            default:
                break;
        }
        dispatch(actionChangeStatus({ ...todo, status: _status }));
    };
    return (
        <div className="todo-item hook-row-space-between">
            <div
                className={`todo-item-value fs-medium pointer ${status === TODO_STATUS.DONE ? 'item-done' : ''}`}
                onClick={handleChangeStatus}
            >
                {value}
            </div>
            <ButtonRemove className="todo-item-btn btn-remove" onClick={handleRemoveTodo} />
        </div>
    );
});

const TodoList = () => {
    const list = useSelector(listTodoSelector);
    if (!list) {
        return null;
    }
    return (
        <Styled className="todo-list">
            {list.map((todo) => (
                <TodoItem key={todo?.id} todo={todo} />
            ))}
        </Styled>
    );
};

export default React.memo(TodoList);
