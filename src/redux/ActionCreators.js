import * as ActionTypes from './ActionTypes';
import { PLACES } from '../Shared/places';

export const addComment = (placeId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT, 
    payload: {
        placeId: placeId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchPlaces = () => (dispatch) => {
    dispatch(placesLoading(true));

    setTimeout(() => {
        dispatch(addPlaces(PLACES));
    }, 2000);
}

export const placesLoading = () => ({
    type: ActionTypes.PLACES_LOADING
});

export const placesFailed = (errmess) => ({
    type: ActionTypes.PLACES_FAILED,
    payload: errmess
});

export const addPlaces = (places) => ({
    type: ActionTypes.ADD_PLACES,
    payload: places
});