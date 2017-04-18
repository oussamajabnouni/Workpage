import React, {Component} from 'react';

import { Button, Checkbox, Form } from 'semantic-ui-react'

class Login extends Component {
    render() {
        return (
            <Form>
                <Form.Field>
                <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                <input placeholder='Password' />
                </Form.Field>
                <Button type='submit' fluid>Login</Button>
            </Form>
        );
    }
}

export default Login;