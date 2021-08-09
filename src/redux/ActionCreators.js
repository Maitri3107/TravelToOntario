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
    .then(response => response.json())
    .then(places => dispatch(addPlaces(places)));
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
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
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
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
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