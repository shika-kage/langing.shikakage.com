import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Routes } from 'react-router-dom';

import { IRouter } from '@interfaces/IRouter';
import { Home } from '@pages/Home';
import { Devs } from '@pages/Devs';

const baseRoutes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/devs' exact component={Devs} />
        <Route path='/documentation' component={(): any => {
            window.location.href = `${location.origin}/public/documentation`;
            return null;
        }}/>
        <Redirect to='/' />
    </Switch>
);

const useRoutes: React.FC<IRouter> = ({ accessStatus }) => {
    switch(accessStatus) {
        case 'NOT_AUTH_ACCOUNTANT': return baseRoutes(null);
        default: return baseRoutes(null);
    }
};

export const Router: React.FC = () => {
    const currentRoutes = useRoutes({ accessStatus: 'NOT_AUTH_ACCOUNTANT' });
    return (<Routes>{currentRoutes}</Routes>);
};