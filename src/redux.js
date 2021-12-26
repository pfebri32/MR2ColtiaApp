import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import RootReducer from './reducers';

const Store = createStore(RootReducer);

const Redux = ({children}) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default Redux;
