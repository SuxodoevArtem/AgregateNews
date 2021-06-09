import { request } from './generic.service';

const getRSS = data => request( {url: `settigs/getrss`, method: "get", data} );

const addRSS = data => request( {url: `settigs/addrss`, method: "post", data} );

const updateRSS = data => request( {url: `settigs/updaterss`, method: "post", data} );

export { getRSS }