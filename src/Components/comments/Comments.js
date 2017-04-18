import React, {Component} from 'react'
import SingleComment from './SingleComment'
import InputComment from './InputComment'
import {connect} from 'react-redux'
import { commentFetchData,addComment} from './../../Redux/Actions/actionCreators'

import { Comment } from 'semantic-ui-react'

class Comments extends Component {

    componentDidMount(){
        this.props.FetchCommentData(this.props.id);
    }

    render() {
        const inPostStyle = { float: 'left', width: '100%', background: '#f7f7f7',
                              padding: '1em',borderTop: '1px solid rgba(0,0,0,.05)'}
        const inPostComments = { maxHeight : '40vh'}
        const inNoteComments = { height: '72vh'}
        const filtredComments = this.props.comments.filter((comment) =>
                                comment.id==this.props.id)
        return (
            <div style={this.props.inPost?inPostStyle:null}>
                {
                //if there is any comment
                 filtredComments.length||!this.props.inPost?
                    <Comment.Group className='tm-scrolllist'
                                style={this.props.inPost?inPostComments:inNoteComments}>
                        {
                        // Fetch comments
                                filtredComments.map((comment,i)=> 
                                <SingleComment key={i} comment={comment}/>)
                        }   
                    </Comment.Group >
                    :null
                }
                <InputComment {...this.props}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        comments : state.comment,
        isLoading : state.commentIsLoading,
    }
}

function mapDispatchtoProps(dispatch){
   return {
        FetchCommentData: (postID) => dispatch(commentFetchData(postID)),
        addComment: (comment,postId) => dispatch(addComment(comment,postId))
    };
}

export default connect(mapStateToProps,mapDispatchtoProps)(Comments);