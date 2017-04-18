export default function coworker(state  = [], action: Object) {
  switch (action.type) {
    case 'COWORKER_FETCH_DATA_SUCCESS':
      return action.reactions;
    case 'ADD_COWORKER_SUCCESS':
      return [...state,
              action]
    case 'ADD_CORWORKER':
      return state;
    default:
      return state;
  }
}



