import { combineReducers } from 'redux';
import { items, itemsHaveError, itemsAreLoading } from './searchReducer';

export default combineReducers({
    items,
    itemsHaveError,
    itemsAreLoading
});
