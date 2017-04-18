import React, {Component} from 'react'
import { Link } from 'react-router'

import { Card } from 'semantic-ui-react'

class PostContent extends Component {
    render() {
        return (
          <Card.Content className="post-content">  
          <Card.Description>
            <Link to='/note/123'>
             <strong>{this.props.post.content}</strong>
            </Link>
          </Card.Description>
          </Card.Content>
        );
    }
}

export default PostContent;