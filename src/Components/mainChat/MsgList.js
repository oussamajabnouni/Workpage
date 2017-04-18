import React, {Component} from 'react';


import MsgItem from './MsgItem'
import MsgInput from './MsgInput'

import { List ,Image , Dimmer , Loader} from 'semantic-ui-react'

class MsgList extends Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.isLoading !== this.props.isLoading){
            this._div.scrollTop = this._div.scrollHeight ;
        }
    }   

    render() {
        return (
            <div>
                <div className="msg-list" ref={(ref) => this._div = ref}>
                    {  
                    this.props.isLoading == true ? 
                    //if
                    <div><Dimmer active inverted>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>
                    <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' /></div>
                    //else
                    : 
                     <List> 
                        {this.props.messages.map( (message,i)=> 
                            <MsgItem key={i} i={i} message={message} />)}            
                     </List>  
                    }
                </div>
                 <MsgInput {...this.props}/>
            </div>
        );
    }
}

export default MsgList;