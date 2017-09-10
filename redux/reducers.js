export const reducer = (state, action) => {
  switch (action.type) {
  case 'ADD_ITEM':
    return Object.assign({}, state, {
      items: [...state.items, action.payload]
    });
  default:
    return state;
  }
};