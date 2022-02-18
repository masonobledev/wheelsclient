import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Showroom from './Showroom';
import Garage from './Garage';
import Glovebox from './Glovebox';

type HomeProps = {
    token: string
}

export default class HomePage extends React.Component <HomeProps, {}> {
    render (){
        return (
            <Box>
                <Container>
                    <Grid>
                        <Box>
                            
                        </Box>
                        <Box>
                            <Showroom />
                        </Box>
                        <Box>
                            <Garage />
                        </Box>
                        <Box>
                            <Glovebox />
                        </Box>
                    </Grid>
                </Container>
            </Box>
        )
    };
};




        
