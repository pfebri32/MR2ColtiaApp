import {combineReducers} from 'redux';

import AccountReducer from './AccountReducer';
import AuthReducer from './AuthReducer';
import MonsterReducer from './MonsterReducer';

const RootReducer = combineReducers({
  accounts: AccountReducer,
  auth: AuthReducer,
  monsters: MonsterReducer,
});

export default RootReducer;
