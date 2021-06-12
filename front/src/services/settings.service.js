import { request } from './generic.service';

const getSources = data => request( {url: `settigs/getrss`, method: "get", data} );

const addSource = data => request( {url: `settigs/addrss`, method: "post", data} );

const updateSource = data => request( {url: `settigs/updaterss`, method: "post", data} );

export { getSources, addSource, updateSource}
