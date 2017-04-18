import React, {Component} from 'react';

import { Item , List } from 'semantic-ui-react'

class MsgItem extends Component {
    render() {
        return (
             <List.Item >
               <Item.Group>
                  <Item >
                        <Item.Image 
                        size='mini' 
                        shape="rounded"
                        src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
                        <Item.Content verticalAlign='middle'>
                        <Item.Header as='a'>{this.props.message.from}</Item.Header>
                         <Item.Meta>{this.props.message.value}</Item.Meta>
                        </Item.Content>
                        
                  </Item>
               </Item.Group>
              </List.Item>
            );
    }
}

export default MsgItem;