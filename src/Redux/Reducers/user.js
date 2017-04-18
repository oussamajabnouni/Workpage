export default function user(state  = [], action: Object) {
  switch (action.type) {
    case 'USER_FETCH_DATA_SUCCESS':
      return state;
    case 'CHANGE_USER':
      return state;
    default:
      return state;
  }
}


export function userIsLoading(state = false, action) {
    switch (action.type) {
        case 'USER_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}