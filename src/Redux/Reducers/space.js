export default function space(state  = [], action: Object) {
  switch (action.type) {
    case 'SPACE_FETCH_DATA_SUCCESS':
      return action.spaces;
    case 'ADD_SPACE':
      return state;
    case 'DELETE_SPACE':
      return state;
    case 'CHANGE_SPACE':
      return state;
    default:
      return state;
  }
}

export function spaceIsLoading(state = false, action) {
    switch (action.type) {
        case 'SPACE_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
