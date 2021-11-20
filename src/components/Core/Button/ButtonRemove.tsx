import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'src/styles/colors';
import { ITheme } from 'src/styles';

interface IProps {}

const Styled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    height: 16px;
    background-color: ${COLORS.red};
    color: ${(props: { theme: ITheme }) => props.theme.textButton};
    width: 16px;
`;

const ButtonRemove = (props: IProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { title, disabled, className = '', ...rest } = props;
    return (
        <Styled className={`btn-remove ${className} fs-small`} {...rest}>
            X
        </Styled>
    );
};

export default React.memo(ButtonRemove);
