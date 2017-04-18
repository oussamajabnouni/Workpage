import React, {Component} from 'react';

import { Header, Icon } from 'semantic-ui-react'
import CreateOptions from './../create/CreateOptions'


class labelHeader extends Component {

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
        let elementHeader = this.state.isOpen ? { color : '#f6f7f9'} : {color : 'rgba(0,0,0,.87)'};  
        let  elementOptions = this.state.isOpen ? <CreateOptions /> : null;

        let labelLoading =  <div className="label-header">
                              <Header textAlign='center'>
                              <div style={elementHeader} >Loading ...</div>
                              </Header>
                              </div>

        let elementLabel =  <div className="label-header">
                                <Header textAlign='center'>
                                <div style={elementHeader} >{this.props.label.name}</div>
                                </Header>
                                <div className="label-add" onClick={this.handleClick}>
                                    <Icon circular link name='plus' />
                                </div>
                                {elementOptions}
                            </div>

        return (this.props.isLabelLoading ? labelLoading : elementLabel);
    }
}

export default labelHeader;