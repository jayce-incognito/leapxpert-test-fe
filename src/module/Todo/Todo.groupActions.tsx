import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'src/components/Core';
import { TODO_MODE } from './Todo.constant';
import { actionChangeMode, actionToggleAllTodo } from './Todo.actions';
import { modeActivedSelector } from './Todo.selector';

const Styled = styled.div`
    .btn-action {
        min-width: 50px;
        margin-right: 15px;
        height: 30px;
        border-radius: 6px;
        :last-child {
            margin-right: 0;
        }
    }
`;

const ActionItem = React.memo((props: { value: string; onClickItem: () => void; actived: boolean }) => {
    const { value, onClickItem, actived } = props;
    return <Button className="btn-action" onClick={onClickItem} title={value} disabled={!actived} />;
});

const TodoGroupActions = () => {
    const dispatch = useDispatch();
    const modeActived = useSelector(modeActivedSelector);
    const factories = [
        {
            id: TODO_MODE.ALL,
            value: 'All',
        },
        {
            id: TODO_MODE.ACTIVE,
            value: 'Active',
        },
        {
            id: TODO_MODE.DONE,
            value: 'Done',
        },
    ];
    return (
        <Styled className="group-actions flex">
            {factories.map(({ id, value }) => (
                <ActionItem
                    key={id}
                    actived={modeActived === id}
                    value={value}
                    onClickItem={() => dispatch(actionChangeMode(id))}
                />
            ))}
            <Button className="btn-action" onClick={() => dispatch(actionToggleAllTodo())} title="Toggle all" />
        </Styled>
    );
};

export default React.memo(TodoGroupActions);
