import { request } from './generic.service';

const getNews = data => request( {url: `news/allnews`, method: "get", data} );

export { getNews }
