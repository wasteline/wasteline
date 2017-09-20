export const reducer = (state, action) => {
  switch (action.type) {
  case 'ADD_ITEM':
    return Object.assign({}, state, {
      items: [...state.items, action.payload]
    });
  case 'CHANGE_PROFILE':
    return Object.assign({}, state, {
      currentProfile: action.payload
    });
  case 'SHOW_PROFILE':
    return Object.assign({}, state, {
      currentProfile: action.payload
    });
  case 'SHOW_ITEMS':
    return Object.assign({}, state, {
      showItem: action.payload
    });
  case 'HIDE_ITEMS':
    return Object.assign({}, state, {
      showItem: action.payload
    });
  case 'UPVOTE':
  return Object.assign({}, state, {
    upvotes: upvotes + 1
  });
  default:
    return state;
  }
};