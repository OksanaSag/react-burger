import {url} from '../utils/constans'

export const getUrl = async () => {
    const res = await fetch(url)
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Error ${res.status}`);
  }