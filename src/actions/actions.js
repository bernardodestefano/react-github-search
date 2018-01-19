import searchService from '../services/searchService';

export const SEARCH_USER = 'SEARCH_USER';

export const searchUser = username => {
  //let result = searchService(username);
  return {
    type: SEARCH_USER,
    username
  };
}
