import React, {Component} from 'react';

import Login from './Login'
import Signin from './Signin'
import {  Divider } from 'semantic-ui-react'

class RightContent extends Component {
    render() {
        return (
            <div>
                <Login/>
                <Divider horizontal>Or</Divider>
                <Signin/>
            </div>
        );
    }
}

export default RightContent;