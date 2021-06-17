import { request } from './generic.service';

const getNews = data => request( {url: `news`, method: "get", data} );

export { getNews }
