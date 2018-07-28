export default function (state = null, action) {
    switch (action.type) {
        case 'VIDEO_SELECTED':
            // we should pass a new reference here, cause react won't update our component
            // if the reference of the data passed by the reducer is the same as the previous one
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}
