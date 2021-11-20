import { lazy } from 'react';
import { IRouteProps } from 'src/module';

const todoRoute: IRouteProps = {
    path: '/todo',
    exact: true,
    component: lazy(() => import('./Todo')),
    name: 'Todo',
    to: '/todo',
};

export const route = todoRoute.path;

export default todoRoute;
