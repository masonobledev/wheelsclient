import * as React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

type HeaderProps = {
    brand: string
};

export default class Header extends React.Component <HeaderProps, {}> {

    render () {
        return (
            <header>
                <AppBar className="header">
                    <Toolbar className="header">The Pufferator!</Toolbar>
                </AppBar>
            </header>
        );
    }
};

