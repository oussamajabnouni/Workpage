export default function post(state  = [], action: Object) {
  switch (action.type) {
    case 'POST_FETCH_DATA_SUCCESS':
      return action.posts; 
    case 'ADD_POST':
      return state;
    case 'DELETE_POST':
      return state;
    case 'CHANGE_POST':
      return state;
    default:
      return state;
  }
}


export function postIsLoading(state = false, action) {
    switch (action.type) {
        case 'POST_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
