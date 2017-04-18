import React, {Component} from 'react';

import { Form , Button} from 'semantic-ui-react'

class SettingsProfile extends Component {
    render() {
        return (
            <Form >
                <Form.Field label='First name' control='input' placeholder='First name' />
                <Form.Field label='Last name' control='input' placeholder='Last name' />
                <Form.Field label='Email Address' control='input' placeholder='Email Address' />
                <Form.Field label='What I do' control='input' placeholder='What I do' />
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

export default SettingsProfile;