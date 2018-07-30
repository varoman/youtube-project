export default function (state = null, action) {
    switch (action.type) {
        case 'SEARCH_UPDATE':
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}
