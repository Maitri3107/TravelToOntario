import { createStore, combineReducers } from 'redux';
import { Places } from './places';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            places: Places,
            Comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
    return store;
}