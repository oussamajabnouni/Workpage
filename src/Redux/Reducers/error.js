export default function error(state = false, action) {
    switch (action.type) {
        case 'HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}