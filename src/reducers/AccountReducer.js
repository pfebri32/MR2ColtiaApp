const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'CREATE_ACCOUNT':
      return [...state, payload];
    case 'DELETE_ACCOUNT':
      console.log(state.filter(account => account !== payload));
      return [...state.filter(account => account !== payload)];
    case 'SET_ACCOUNTS':
      return payload;
    default:
      return state;
  }
};
