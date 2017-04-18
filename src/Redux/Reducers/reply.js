export default function reply(state  = [], action: Object) {
  switch (action.type) {
    case 'REPLY_FETCH_DATA_SUCCESS':
      return state;
    case 'ADD_REPLY':
      return state;
    case 'DELETE_REPLY':
      return state;
    case 'CHANGE_REPLY':
      return state;
    case 'REPLY_IS_LOADING':
      return state; 
    default:
      return state;
  }
}

export function replyIsLoading(state = false, action) {
    switch (action.type) {
        case 'REPLY_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
