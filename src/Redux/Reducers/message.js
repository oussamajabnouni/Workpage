export default function message(state  = [], action: Object) {
  switch (action.type) {
    case 'MESSAGE_FETCH_DATA_SUCCESS':
      return action.messages;
    case 'ADD_MESSAGE':
      return [...state,action];
    case 'DELETE_MESSAGE':
      return state;
    default:
      return state;
  }
}

export function messageIsLoading(state = false, action) {
    switch (action.type) {
        case 'MESSAGE_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
