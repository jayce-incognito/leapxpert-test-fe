/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { v4 } from 'uuid';
import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Input } from 'src/components/Core';
import { HeaderApp } from 'src/components/Header';
import { actionAddTodo } from './Todo.actions';
import { TODO_STATUS } from './Todo.constant';
import TodoList from './Todo.list';
import TodoGroupActions from './Todo.groupActions';

const Styled = styled.div``;

const TodoBox = React.memo(() => {
    const dispatch = useDispatch();
    const [todoVal, setTodoVal] = React.useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoVal(e.target.value);
    };
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        let value = trim(todoVal);
        if (e.key === 'Enter' && !isEmpty(todoVal)) {
            dispatch(
                actionAddTodo({
                    id: v4(),
                    value,
                    status: TODO_STATUS.ACTIVE,
                }),
            );
            setTodoVal('');
        }
    };
    return (
        <div className="input-container">
            <Input
                type="text"
                onChange={onChange}
                value={todoVal}
                placeholder="Type something..."
                autoFocus
                onKeyDown={onKeyDown}
            />
        </div>
    );
});

const Todo = () => {
    return (
        <Styled>
            <HeaderApp />
            <TodoBox />
            <TodoList />
            <TodoGroupActions />
        </Styled>
    );
};

export default React.memo(Todo);
