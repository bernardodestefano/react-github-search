import searchService from '../services/searchService';

export const searchUser = username => {
  let result = searchService(username);
  return {
    type: 'USER_SEARCH',
    result
  };
}
