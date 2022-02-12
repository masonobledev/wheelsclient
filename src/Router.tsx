import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppClient from './AppClient';

export const Router: React.FunctionComponent<{}> = () => {
    return(
        <BrowserRouter>
        <div>
            <Route exact={true} path="/" component={AppClient} />
        </div>
        </BrowserRouter>
    );
};