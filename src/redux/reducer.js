import { PLACES } from '../Shared/places';
import { COMMENTS } from '../Shared/comments';
import { LEADERS } from '../Shared/leaders';
import { PROMOTIONS } from '../Shared/promotions';

export const initialState = {
    places: PLACES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS

};

export const Reducer = (state = initialState, action) => {
    return state;
};