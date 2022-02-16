import React from 'react';
import Showroom from './showroom';
import Garage from './garage';
import Glovebox from "./glovebox";

type HomeProps = {
    token: string
}

export default class HomePage extends React.Component <HomeProps, {}> {
    render (){
        return (
            <Showroom />
            <Garage />
            <Glovebox />

        )
    };
};
        
