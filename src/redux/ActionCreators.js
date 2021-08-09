import * as ActionTypes from './ActionTypes';
import { PLACES } from '../Shared/places';
import { baseUrl } from '../Shared/baseUrl';

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

    return fetch(baseUrl + 'places')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(places => dispatch(addPlaces(places)))
    .catch(error => dispatch(placesFailed(console.error.message)));
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

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(console.error.message)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(console.error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});