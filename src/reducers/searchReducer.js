export const itemsHaveError = (state = false, action) => {
  switch(action.type) {
    case 'ITEMS_HAVE_ERROR':
      return action.hasError;
    default:
      return state;
  }
};

export const itemsAreLoading = (state = false, action) => {
  switch (action.type) {
    case 'ITEMS_ARE_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const items = (state = [], action) => {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;
    default:
      return state;
  }
}

export const input = (state = "", action) => {
  switch (action.type) {
    case 'ITEMS_INPUT':
      return action.input;
    default:
      return state;
  }
}
