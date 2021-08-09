import * as ActionTypes from './ActionTypes';


export const Comments = (state = {
    errMess: null,
    Comments: []
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_COMMENTS:
            return { ...state, isLoading: false, errMess: null, Comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, Comments: [] };

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            //console.log("Comment: ", comment);
            return { ...state, comments: state.comments.concat(comment) };

        default:
            return state;
    }
}