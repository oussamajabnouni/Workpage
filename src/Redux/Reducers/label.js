export default function label(state  = [], action: Object) {
  switch (action.type) {
    case 'LABEL_FETCH_DATA_SUCCESS':
      return action.labels; 
    case 'ADD_LABEL':
      return state;
    case 'DELETE_LABEL':
      return state;
    case 'CHANGE_LABEL':
      return state;
    default:
      return state;
  }
}

export function labelIsLoading(state = false, action) {
    switch (action.type) {
        case 'LABEL_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
