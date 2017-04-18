import React, {Component} from 'react';

import { Form,Modal,Button,Icon } from 'semantic-ui-react'

const privacy = [
  { text: 'Everyone', value: 'everyone' },
  { text: 'Just Me', value: 'justme' },
]

class CreateNote extends Component {
    createClick(){

    }

    render() {
        return (
                <Modal.Content>
                    <Form>
                        <Form.Field>
                        <label>Note Title</label>
                        <input placeholder='Note Title ...' />
                        </Form.Field>
                        <Form.Field>
                        <Form.Select label='Privacy' name='privacy' options={privacy} placeholder='Privacy' />
                        </Form.Field>
                        <Button color='green' onClick={this.createClick.bind(this)} inverted>
                            <Icon name='checkmark' /> Create
                        </Button>
                    </Form>
                </Modal.Content>
        );
    }
}

export default CreateNote;