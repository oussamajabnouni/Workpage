import React, {Component} from 'react';

import { Header, Icon, Input } from 'semantic-ui-react'
class LabelAdd extends Component {

    constructor(props){
        super(props)
        this.state = { isClicked : false }
    }

    onClickHandle(){
        this.setState({ isClicked : true })
    }

    addLabelClick(){
        this.setState({ isClicked : false })
    }

    render() {
        const style = { padding: '0.4em' }
        return (
             this.state.isClicked === true
             ?
             //if
                <div className="label-header" style={style}>
                    <Header textAlign='center'>
                        <Input placeholder='New label ...' size='mini' 
                        icon={<Icon name='plus' link onClick={this.addLabelClick.bind(this)} />} 
                        />
                    </Header>
                </div>
             :
             //ekse
                <div className="add-label" onClick={this.onClickHandle.bind(this)}>
                    <Icon name='plus' /><strong>ADD</strong>
                </div>
        );
    }
}

export default LabelAdd;