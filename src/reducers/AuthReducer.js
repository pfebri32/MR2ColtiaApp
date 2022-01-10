const initialState = null;

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return payload;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};
