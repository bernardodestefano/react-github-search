import axios from 'axios';

const searchService = (username) => {
  return axios.get(`https://api.github.com/search/users?q=${username}`)
              .then(resp => {
                return resp.data.items;
              });
}

export default searchService;
