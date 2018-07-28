export default function (state = null, action) {
    switch (action.type) {
        case 'SEARCH_UPDATE':
            return action.payload.items;
        default:
            return state;
    }
}
