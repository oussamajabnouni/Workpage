import React, {Component} from 'react';

import { Dropdown } from 'semantic-ui-react'

class PostOptions extends Component {
    render() {
        const style={ left: 'auto', right:0 }
        return (
            <div className="option">
                <Dropdown icon="ellipsis vertical">
                    <Dropdown.Menu style={style}>
                        <Dropdown.Item text='Delete' icon="remove"/>
                        <Dropdown.Item 
                         text='Important' 
                         label={{ color: 'red', empty: true, circular: true }}
                        />
                        <Dropdown.Item 
                         text='Important' 
                         label={{ color: 'yellow', empty: true, circular: true }}
                        />
                        <Dropdown.Item 
                         text='Important' 
                         label={{ color: 'green', empty: true, circular: true }}
                        />
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default PostOptions;