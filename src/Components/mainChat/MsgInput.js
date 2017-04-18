import React, {Component} from 'react';

import { Input,Icon } from 'semantic-ui-react'

class MsgInput extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

     handleClick(event) {
        event.preventDefault()
        if(this.state.value !== ""){
            this.props.addMessage(this.state.value)
            this.setState({value: ''})
        }
     }

     handleChange(event) {
        this.setState({value: event.target.value})
     }

    render() {
        const style = {
            width: '90%',
        };
        return (
            <form onSubmit={this.handleClick} className="message-input">
                    <Input 
                    style={style} 
                    value={this.state.value} 
                    transparent placeholder='Write something...' 
                    onChange={this.handleChange}/>
                    <Icon link  name='file text outline' color='grey' />
                    <Icon link  name='send' color='grey' onClick={this.handleClick} />
                     <input type="submit" hidden />
            </form>
        );
    }
}

export default MsgInput;