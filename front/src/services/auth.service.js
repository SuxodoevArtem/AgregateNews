import { request } from './generic.service';

const signUpRequest = data => request( {url: `auth/signup`, method: "post", data} )

const loginRequest = data => request( {url: `auth/login`, method: "post", data} )

export { signUpRequest , loginRequest }