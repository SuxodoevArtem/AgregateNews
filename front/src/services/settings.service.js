import { request } from './generic.service';

const getSources = data => request( {url: `settigs/getsources`, method: "get", data} );

const deleteSource = data => request( {url: `settigs/deletesourse`, method: "post", data} );

const addSource = data => request( {url: `settigs/addsourse`, method: "post", data} );

export { getSources, addSource, deleteSource }
