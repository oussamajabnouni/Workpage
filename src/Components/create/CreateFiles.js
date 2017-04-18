import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

import { Form,Modal,Button,Icon } from 'semantic-ui-react'
class CreateFiles extends Component {
    createClick(){

    }

    render() {
        return (
            <Modal.Content>
                <Form>
                    <Form.Field>
                    <label>Files Title</label>
                    <input placeholder='Files Title ...' />
                    </Form.Field>
                    <Form.Field>
                        <Dropzone>
                        <div>Try dropping some files here, or click to select files to upload.</div>
                        </Dropzone>
                    </Form.Field>
                    <Button color='green' onClick={this.createClick.bind(this)} inverted>
                        <Icon name='checkmark' /> Upload
                    </Button>
                </Form>
            </Modal.Content>
        );
    }
}

export default CreateFiles;