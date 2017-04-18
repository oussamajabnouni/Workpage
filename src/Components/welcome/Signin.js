import React, {Component} from 'react';

import { Button, Checkbox, Form } from 'semantic-ui-react'

class Signin extends Component {
    render() {
        return (
            <Form>
                <Form.Field>
                <input placeholder='Team Name' />
                </Form.Field>
                <Button.Group>
                    <Button fluid >Create</Button>
                    <Button.Or />
                    <Button positive fluid>Join</Button>
                </Button.Group>
            </Form>
        );
    }
}

export default Signin;