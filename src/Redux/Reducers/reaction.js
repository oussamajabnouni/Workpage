export default function reaction(state  = [], action: Object) {
  switch (action.type) {
    case 'REACTION_FETCH_DATA_SUCCESS':
      return action.reactions;
    case 'ADD_REACTION_SUCCESS':
      return [...state,
              action]
    case 'DELETE_REACTION':
      return state;
    case 'CHANGE_REACTION':
      return state;
    default:
      return state;
  }
}

export function reactionIsLoading(state = false, action) {
    switch (action.type) {
        case 'REACTION_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

