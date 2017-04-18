import React, {Component} from 'react'
import CreateNote from './CreateNote'
import CreateImages from './CreateImages'

import { Icon,Modal } from 'semantic-ui-react'

class CreateOptions extends Component {
    render() {
        return (
               <div  className="label-addoptions">            
                       <Modal trigger={<Icon circular link name='edit' />}>
                            <Modal.Header>Create New Note</Modal.Header>
                            <CreateNote />
                       </Modal>
                       <Modal trigger={<Icon circular link name='image' />}>
                            <Modal.Header>Upload Photos</Modal.Header>
                            <CreateImages />
                       </Modal>
                       <Modal trigger={<Icon circular link name='file text outline' />}>
                            <Modal.Header>Upload Files</Modal.Header>
                            <CreateImages />
                       </Modal>
                       <Icon circular link name='object group' />
               </div>
        );
    }
}

export default CreateOptions;