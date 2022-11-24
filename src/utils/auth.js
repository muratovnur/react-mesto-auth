import { baseUrl } from "./utils";


function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(Error(res.status));
}


export function register(password, email) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({ password, email })
  })
  .then(res => handleResponse(res))
}


export function login(password, email) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({ password, email })
  })
  .then(res => handleResponse(res))
}


export function validateToken(token) {
  return fetch(`${baseUrl}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  .then(res => handleResponse(res))
}