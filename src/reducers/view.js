export default function (state = null, action) {
    switch (action.type) {
        case 'VIEW_CHANGED':
            return action.payload;
        default:
            return state;
    }
}