import React, {Component} from 'react';
import SettingsMenu from './../Components/settings/SettingsMenu'
import SettingsProfile from './../Components/settings/SettingsProfile'

import { Grid, Segment } from 'semantic-ui-react'

class Settings extends Component {

    render() {
        const style={height : '70vh' ,width:'127vh', padding: 0}
        const noPadding={padding: 0}
        return (
            <Segment style={style} className="home-container" >
                <Grid celled='internally' >
                    <Grid.Column width={4} style={noPadding}>
                        <SettingsMenu />
                    </Grid.Column>
                    <Grid.Column width={12} textAlign="left">
                        <SettingsProfile />
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default Settings;