import React, {Component} from 'react';

import { Grid, Segment } from 'semantic-ui-react'
import RightContent from './../Components/welcome/RightContent'
import LeftContent from './../Components/welcome/LeftContent'
import Footer from './../Components/welcome/Footer'


class WelcomePage extends Component {
    render() {
        return (
            <Grid className="welcome-container" >
                <Grid.Column width={16} >
                    <Segment padded='very'>
                        <Grid>
                          <Grid.Column width={10} >
                             <LeftContent/>
                          </Grid.Column>
                          <Grid.Column width={6} >
                             <RightContent/>
                          </Grid.Column>
                        </Grid>
                    </Segment>
                </Grid.Column>
                <Footer/>
            </Grid>
        );
    }
}

export default WelcomePage;