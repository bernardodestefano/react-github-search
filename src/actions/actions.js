import axios from 'axios';

export const itemsHaveError = bool => {
  return {
    type: 'ITEMS_HAVE_ERROR',
    hasError: bool
  };
};

export const itemsAreLoading = bool => {
  return {
    type: 'ITEMS_ARE_LOADING',
    isLoading: bool
  };
};

export const itemsFetchDataSuccess = items => {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
};

export const itemsInput = input => {
  return {
    type: 'ITEMS_INPUT',
    input
  };
};

export const updateInput = input => {
  return (dispatch) => {
    dispatch(itemsInput(input));
  }
}

export const itemsFetchData = url => {
  return (dispatch) => {
      dispatch(itemsAreLoading(true));

      axios.get(url)
          .then((response) => {
              if (response.status !== 200) {
                  throw Error(response.statusText);
              }

              dispatch(itemsAreLoading(false));

              return response;
          })
          .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
          .catch(() => dispatch(itemsHaveError(true)));
  };
}
