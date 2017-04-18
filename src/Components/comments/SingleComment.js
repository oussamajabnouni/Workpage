import React, {Component} from 'react';

import { Comment } from 'semantic-ui-react'

class SingleComment extends Component {
    render() {
        return (
                <Comment>
                     <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>{this.props.comment.name}</Comment.Author>
                        <Comment.Metadata>
                        <span>Today at 5:42PM</span>
                        </Comment.Metadata>
                        <Comment.Text>{this.props.comment.value}</Comment.Text>
                    </Comment.Content>
                </Comment>
        );
    }
}

export default SingleComment;