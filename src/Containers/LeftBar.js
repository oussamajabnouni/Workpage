import React, {Component} from 'react';
import { Link } from 'react-router'

import { List, Image } from 'semantic-ui-react'

class LeftBar extends Component {
    render() {
        const style = {
            marginLeft: '3px'
        };
        return (
               <List selection >
                    <List.Item style={style}  >
                     <Link to='/settings'>
                      <Image avatar src='http://semantic-ui.com/images/avatar2/small/rachel.png' />
                     </Link>
                    </List.Item>

                    <List.Item style={style} >
                    <Image avatar src='http://semantic-ui.com/images/avatar2/small/lindsay.png' />
                    </List.Item>

               </List>
        );
    }
}

export default LeftBar;