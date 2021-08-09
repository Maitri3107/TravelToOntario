import * as ActionTypes from './ActionTypes';

export const addComment = (placeId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT, 
    payload: {
        placeId: placeId,
        rating: rating,
        author: author,
        comment: comment
    }
});