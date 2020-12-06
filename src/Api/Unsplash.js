import axios from 'axios'

export const SearchImages = (term) => {
    const response = axios.get('https://api.unsplash.com/search/photos', {
      params : {
        query: term
      },
      headers: {
        Authorization: 'Client-ID y4-4Ibdwn7L4WDxX3w6c1qaYtZ0hhDxzadKxH9Ztigc'
      }
    });

    return response;

}

