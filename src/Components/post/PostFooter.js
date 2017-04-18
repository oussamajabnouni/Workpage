import React, {Component} from 'react';
import PostReaction from './PostReaction'
import Comments from './../comments/Comments'

import { Card,Icon } from 'semantic-ui-react'

class PostComments extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.isOpen===true)
            this.setState({isOpen: false})
        else
            this.setState({isOpen: true}) 
    }

    render() {
        const style={padding : 0}
        return (
            <Card.Content extra style={style}>
                  <PostReaction {...this.props}/>
                  <div className="tm-comments" onClick={this.handleClick}>
                    <a>
                      <Icon name='comment' />{this.props.post.comment_count} Comments
                    </a>
                  </div> 
                  {
                  this.state.isOpen &&
                  <Comments inPost id={this.props.post.id}/> 
                  }                 
            </Card.Content>  
        );
    }
}

export default PostComments;