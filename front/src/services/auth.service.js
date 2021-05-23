import { request } from './generic.service';

const signUp = data => request( {url: `auth/signup`, method: "POST", data})

const login = data => request( {url: `auth/login`, method: "POST", data})

export { signUp, login }