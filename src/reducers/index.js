import {combineReducers} from 'redux';

import AccountReducer from './AccountReducer';

const RootReducer = combineReducers({
  accounts: AccountReducer,
});

export default RootReducer;
