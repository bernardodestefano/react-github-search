import { combineReducers } from 'redux';
import { input, items, itemsHaveError, itemsAreLoading } from './searchReducer';

export default combineReducers({
    input,
    items,
    itemsHaveError,
    itemsAreLoading
});
