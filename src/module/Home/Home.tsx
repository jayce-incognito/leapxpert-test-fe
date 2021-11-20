import React from 'react';
import styled from 'styled-components';
import { Todo } from 'src/module/Todo';

declare global {
    interface Window {
        ReactNativeWebView: any;
    }
}

const Styled = styled.div``;

const Home = () => {
    return (
        <Styled>
            <Todo />
        </Styled>
    );
};

export default React.memo(Home);
