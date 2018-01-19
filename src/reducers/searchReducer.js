const searchReducer = (state = { users: [] }, action) => {
  switch(action.type){
    case 'USER_SEARCH':
      return {
        users: result
      };
    default:
      return state;
  }
}

export default searchReducer;
