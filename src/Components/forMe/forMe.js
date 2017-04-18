import React, {Component} from 'react';
import { List } from 'semantic-ui-react'

class ForMe extends Component {
    render() {
        return (
            <List divided relaxed>
                <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>Jack commented on your post</List.Header>
                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>Leo assign task for you</List.Header>
                    <List.Description as='a'>Updated 22 mins ago</List.Description>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>25 person like your file</List.Header>
                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                </List.Content>
                </List.Item>
            </List>
        );
    }
}

export default ForMe;