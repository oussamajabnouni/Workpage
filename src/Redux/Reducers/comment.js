export default function comment(state  = [], action: Object) {
  switch (action.type) {
    case 'COMMENT_FETCH_DATA_SUCCESS':
      return action.comments;
    case 'ADD_COMMENT_SUCCESS':
      return [...state,
              action]
    case 'DELETE_COMMENT':
      return state;
    case 'CHANGE_COMMENT':
      return state;
    default:
      return state;
  }
}

export function commentIsLoading(state = false, action) {
    switch (action.type) {
        case 'COMMENT_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

