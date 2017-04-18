import React, {Component} from 'react';

import PostItem from './../post/PostItem'
import LabelHeader from './LabelHeader'

class LabelItem extends Component {


    render() {
        let postLoading =   <div className="label-content">
                                <PostItem loading={true} />                           
                            </div>
                        
        return (     
            <div>
                  <LabelHeader {...this.props} />
                  {
                    this.props.isPostLoading ? postLoading :
                    <div className="label-content">
                        {   
                            this.props.posts.filter((post) => post.labelid==this.props.label.id)
                                            .map((post,i)=> 
                                            <PostItem key={i} post={post} {...this.props} loading={false}/> )
                        }
                    </div> 
                  }
            </div>          
        );
    }
}

export default LabelItem;