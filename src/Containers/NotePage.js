import React, {Component} from 'react';
import NoteEditor from './../Components/note/NoteEditor'
import Comments from './../Components/comments/Comments'

import { Grid, Segment } from 'semantic-ui-react'

class NotePage extends Component {
  render() {
    return (
            <Grid className="note-container" stretched> 
                <Grid.Column width={12} >
                    <div className="editor"><NoteEditor /></div>
                </Grid.Column>
                <Grid.Column width={4} >
                    <Segment><Comments id={this.props.params.noteid}/></Segment>
                </Grid.Column>
            </Grid>
    );
  }
}

export default NotePage;