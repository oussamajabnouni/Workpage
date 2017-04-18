import React, {Component} from 'react';

import PostOptions from './PostOptions'
import { Image , Card } from 'semantic-ui-react'

class PostHeader extends Component {
    render() {
        const style = {
            fontSize: '1em',
            marginTop: '0'
        };
        return (
                    <Card.Content>
                        <Image 
                        floated='left' 
                        size='mini'    
                        src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
                        <PostOptions />
                        <Card.Header style={style}>
                         {this.props.post.user}
                        </Card.Header>
                        <Card.Meta>
                        2 days ago
                        </Card.Meta>
                    </Card.Content>
        );
    }
}

export default PostHeader;