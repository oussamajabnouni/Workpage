// DATA FETCHING


export function spaceFetchData() {
    return (dispatch) => {
        dispatch(spaceIsLoading(true));
        fetch('http://5834919e62f23712003730c5.mockapi.io/test/spaces')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(spaceIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((spaces) => dispatch(spaceFetchDataSuccess(spaces)))
            .catch(() => dispatch(HasErrored(true)));
    };
}

export function labelFetchData(spaceID) {
    return (dispatch) => {
        dispatch(labelIsLoading(true));
        fetch('http://5834919e62f23712003730c5.mockapi.io/test/label/')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(labelIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((labels) => dispatch(labelFetchDataSuccess(labels)))
            .catch(() => dispatch(HasErrored(true)));
    };
}

export function postFetchData(spaceID) {
    return (dispatch) => {
        dispatch(postIsLoading(true));
        fetch('http://5834919e62f23712003730c5.mockapi.io/test/post/')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(postIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((posts) => dispatch(postFetchDataSuccess(posts)))
            .catch(() => dispatch(HasErrored(true)));
    };
}






export function HasErrored(bool) {
    return {
        type: 'HAS_ERRORED',
        hasErrored: bool
    };
}
// Space Actions 
export function addSpace(name) {
  return {
    type: 'ADD_SPACE',
    name
  };
}

export function spaceIsLoading(bool) {
    return {
        type: 'SPACE_IS_LOADING',
        isLoading: bool
    };
}

export function deleteSpace(id) {
  return {
    type: 'DELETE_SPACE',
    id
  };
}

export function changeSpace(id,name) {
  return {
    type: 'CHANGE_SPACE',
    id,
    name
  };
}

export function spaceFetchDataSuccess(spaces) {
    return {
        type: 'SPACE_FETCH_DATA_SUCCESS',
        spaces
    };
}



// MESSAGE Actions 
export function messageFetchData() {
   return (dispatch) => {
        dispatch(messageIsLoading(true));
        fetch('http://5834919e62f23712003730c5.mockapi.io/test/message')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(messageIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((messages) => dispatch(messageFetchDataSuccess(messages)))
            .catch(() => dispatch(HasErrored(true)));
    };
}

export function addMessage(message){
    return (dispatch) =>  {
        fetch('http://5834919e62f23712003730c5.mockapi.io/test/message/',
            {   method:'post',
                body: JSON.stringify({
                      value: message,
                }) 
            })
            .then((response) => response.json())
            .then((message) => dispatch(addMessageSuccess(message)))
            .catch(() => dispatch(HasErrored(true)));
    }
}


export function addMessageSuccess(message) {
  return {
    type: 'ADD_MESSAGE_SUCCESS',
    message
  };
}


export function messageIsLoading(bool) {
    return {
        type: 'MESSAGE_IS_LOADING',
        isLoading: bool
    };
}

export function deleteMessage(id) {
  return {
    type: 'MESSAGE_SPACE',
    id
  };
}

export function messageFetchDataSuccess(messages) {
    return {
        type: 'MESSAGE_FETCH_DATA_SUCCESS',
        messages
    };
}




// REPLY Actions 
export function addReplay(reply,commentID) {
  return {
    type: 'ADD_REPLY',
    reply,
    commentID
  };
}

export function replyIsLoading(bool) {
    return {
        type: 'REPLY_IS_LOADING',
        isLoading: bool
    };
}

export function deleteReply(id) {
  return {
    type: 'DELETE_REPLY',
    id
  };
}

export function changeReply(id,reply) {
  return {
    type: 'CHANGE_REPLY',
    id,
    reply
  };
}

export function replyFetchDataSuccess(replies) {
    return {
        type: 'REPLY_FETCH_DATA_SUCCESS',
        replies
    };
}


// Post  Actions 
export function addPost(value,labelID) {
  return {
    type: 'ADD_POST',
    value,
    labelID
  };
}

export function postIsLoading(bool) {
    return {
        type: 'POST_IS_LOADING',
        isLoading: bool
    };
}

export function deletePost(id) {
  return {
    type: 'DELETE_POST',
    id
  };
}

export function changePost(id,value) {
  return {
    type: 'CHANGE_POST',
    id,
    value
  };
}

export function postFetchDataSuccess(posts) {
    return {
        type: 'POST_FETCH_DATA_SUCCESS',
        posts
    };
}


// Label Actions 
export function addLabel(name,spaceID) {
  return {
    type: 'ADD_LABEL',
    name,
    spaceID
  };
}

export function labelIsLoading(bool) {
    return {
        type: 'LABEL_IS_LOADING',
        isLoading: bool
    };
}

export function deleteLabel(id) {
  return {
    type: 'DELETE_LABEL',
    id
  };
}

export function changeLabel(id,name) {
  return {
    type: 'CHANGE_LABEL',
    id,
    name
  };
}

export function labelFetchDataSuccess(labels) {
    return {
        type: 'LABEL_FETCH_DATA_SUCCESS',
        labels
    };
}



// Comment Actions 

export function commentFetchData(postID) {
    return (dispatch) => {
        dispatch(commentIsLoading(true));
        fetch('http://5834919e62f23712003730c5.mockapi.io/test/comment/')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(commentIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((comments) => dispatch(commentFetchDataSuccess(comments)))
            .catch(() => dispatch(HasErrored(true)));
    };
}

export function addComment(comment,postID){
    return (dispatch) =>  {
        fetch('http://5834919e62f23712003730c5.mockapi.io/test/comment/',
            {   method:'post',
                body: JSON.stringify({
                      value: comment,
                }) 
            })
            .then((response) => response.json())
            .then((reaction) => dispatch(addCommentSuccess(reaction)))
            .catch(() => dispatch(HasErrored(true)));
    }
}


export function addCommentSuccess(comment) {
  return {
    type: 'ADD_COMMENT_SUCCESS',
    comment
  };
}


export function commentIsLoading(bool) {
    return {
        type: 'COMMENT_IS_LOADING',
        isLoading: bool
    };
}

export function deleteComment(id) {
  return {
    type: 'DELETE_COMMENT',
    id
  };
}

export function changeComment(id,comment) {
  return {
    type: 'CHANGE_COMMENT',
    id,
    comment
  };
}

export function commentFetchDataSuccess(comments) {
    return {
        type: 'COMMENT_FETCH_DATA_SUCCESS',
        comments
    };
}


// Reaction Actions 
export function reactionFetchData() {
    return (dispatch) => {
        dispatch(reactionIsLoading(true));
        fetch('http://5834919e62f23712003730c5.mockapi.io/test/reaction/')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(reactionIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((reactions) => dispatch(reactionFetchDataSuccess(reactions)))
            .catch(() => dispatch(HasErrored(true)));
    };
}

export function addReaction(reaction,postID){
    return (dispatch) =>  {
        fetch('http://5834919e62f23712003730c5.mockapi.io/test/reaction/',
            {   method:'post',
                body: JSON.stringify({
                      name: 'reaction',
                      postId: 1
                }) 
            })
            .then((response) => response.json())
            .then((reaction) => dispatch(addReactionSuccess(reaction)))
            .catch(() => dispatch(HasErrored(true)));
    }
}


export function addReactionSuccess(reaction) {
  console.log(reaction)
  return {
    type: 'ADD_REACTION_SUCCESS',
    reaction
  };
}

export function reactionIsLoading(bool) {
    return {
        type: 'REACTION_IS_LOADING',
        isLoading: bool
    };
}

export function deleteReaction(id) {
  return {
    type: 'DELETE_REACTION',
    id
  };
}

export function reactionFetchDataSuccess(reactions) {
    return {
        type: 'REACTION_FETCH_DATA_SUCCESS',
        reactions
    };
}


// User Actions 

export function userIsLoading(bool) {
    return {
        type: 'USER_IS_LOADING',
        isLoading: bool
    };
}

export function changeUser(id,value) {
  return {
    type: 'CHANGE_COMMENT',
    id,
    value
  };
}

export function userFetchDataSuccess(userData) {
    return {
        type: 'USER_FETCH_DATA_SUCCESS',
        userData
    };
}