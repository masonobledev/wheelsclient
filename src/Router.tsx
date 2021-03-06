import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

export const AppRouter: React.FunctionComponent<{}> = () => {
    return(
        
        <BrowserRouter>
            <div>
                <Route exact={true} path="/" component={App} />
            </div>
        </BrowserRouter>
    );
};