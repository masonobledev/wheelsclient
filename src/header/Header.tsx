import * as React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

type HeaderProps = {
    brand: string
};

// const useStyles = makeStyles(() => ({
//     header: {
//         height: '80px',
//         position: 'relative',
//     },

//     logo: {
//         fontFamily: "Work Sans, sans-serif",
//         fontWeight: 600,
//         color: "#FFFEFE",
//         textAlign: "left",
//     },
// }));

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

