import React, {Component} from 'react';

import { Comment,Input } from 'semantic-ui-react'

class InputComment extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
     handleClick(event) {
        event.preventDefault()
         if(this.state.value !== ""){
            this.props.addComment(this.state.value,this.props.id)
            this.setState({value: ''})
         }

     }

     handleChange(event) {
        this.setState({value: event.target.value})
     }
    render() {
        return (
           <form onSubmit={this.handleClick} >
            <Comment.Group >
              <Comment>
                <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                  <Input 
                  fluid  
                  value={this.state.value} 
                  onChange={this.handleChange} 
                  placeholder='Comment...' />
                </Comment.Content>
              </Comment>
            </Comment.Group >
           </form>
        );
    }
}

export default InputComment;