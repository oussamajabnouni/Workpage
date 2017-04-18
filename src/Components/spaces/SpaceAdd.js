import React, {Component} from 'react';

import { Grid, Icon, Segment,Input} from 'semantic-ui-react'

class SpaceAdd extends Component {

    constructor(props){
        super(props)
        this.state = { isClicked : false }
    }

    onClickHandle(){
        this.setState({ isClicked : true })
    }

    addSpaceClick(){
        this.setState({ isClicked : false })
    }

    render() {
        const style = { padding : '.60em'} 
        const input = { width: '80%' }
        return (
          this.state.isClicked === true
          ?
          //if
            <Grid.Column >
                <Segment style={style}>
                <Input style={input} placeholder='new space ...' size='mini' 
                icon={<Icon name='plus' link onClick={this.addSpaceClick.bind(this)} />} 
                />
                </Segment>
            </Grid.Column>
          //else
          :
          <Grid.Column onClick={this.onClickHandle.bind(this)}>
              <div className="add-space">
                 <Icon name='plus' /><strong>ADD</strong>
              </div>
          </Grid.Column>
        );
    }
}

export default SpaceAdd;