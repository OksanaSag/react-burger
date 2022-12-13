import {url} from './constans'

const response = (res) => {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}
export const getUrl = () => {
  return fetch(`${url}/ingredients`, {
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    },
      method: 'GET'
  })
  .then(res => response(res))
   
  } 
  