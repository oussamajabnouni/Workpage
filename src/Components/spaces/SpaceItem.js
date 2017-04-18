import React, {Component} from 'react';
import { Link } from 'react-router'

import { Grid, Segment,Header } from 'semantic-ui-react'
class SpaceItem extends Component {
    render() {
        return (
          <Grid.Column>
            <Link to={this.props.space.id === '' ? '/' : '/space/'+this.props.space.id}><Segment>
            <Header as="h4" color='blue'>{this.props.space.name}</Header> 
            </Segment></Link>
          </Grid.Column>
        );
    }
}

export default SpaceItem;