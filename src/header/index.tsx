import * as React from 'react';

type HeaderProps = {
    brand: string
}

const useStyles = makeStyles(() => ({
    header: {
        height: '80px',
        position: 'relative',
    },

    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
}));

export class HeaderPuff extends React.Component <HeaderProps, {}> {

    public render () {
        return (
            <header>
                {/* <AppBar className="header">
                    <Toolbar className="header">The Pufferator!</Toolbar>
                </AppBar> */}
            </header>
        );
    }
};
