import React from 'react';
import styled from 'styled-components';
import { ENVS } from 'src/configs';

const Styled = styled.img`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: solid 0.5px;
`;

const AppIcon = (props: any) => {
    return <Styled src={`${ENVS.REACT_APP_DOMAIN_URL}/images/icons/app_logo.png`} className="app-icon" {...props} />;
};

export default React.memo(AppIcon);
