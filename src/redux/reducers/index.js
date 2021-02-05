import { combineReducers } from 'redux';

import categoryListReducers from './categoryListReducers';

const rootReducers = combineReducers({
  categoryList: categoryListReducers,
});

export default rootReducers;
