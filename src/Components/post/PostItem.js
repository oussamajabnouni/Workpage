import React, {Component} from 'react';

import PostFooter from './PostFooter'
import PostContent from './PostContent'
import PostHeader from './PostHeader'

import { Card,Segment,Dimmer,Loader,Image } from 'semantic-ui-react'

class PostItem extends Component {
    render() {
        const style= { margin: '1.925em',width: '80%' }
        const noPadding = { padding: 0 }
        return (
                this.props.loading 
                ?
                //if
                <Card><Segment style={noPadding}>
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
                <Image style={style} src={process.env.PUBLIC_URL + '/img/short-paragraph.png'} />
                <Image style={style} src={process.env.PUBLIC_URL + '/img/short-paragraph.png'} />
                </Segment></Card>
                //else                        
                :
                <Card><PostHeader {...this.props}/>
                <PostContent {...this.props}/>
                <PostFooter {...this.props}/></Card>        
        );
    }
}

export default PostItem;