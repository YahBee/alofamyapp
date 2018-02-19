
// This is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'

import config from './config.js'

let api = createAPI({
  config
})

export async function getAPI () {
  await api
  return api
}

async function fetch (child) {
  await api
  const cache = api.cachedItems
  if (cache && cache.has(child)) {
    return cache.get(child)
  } else {
    return new Promise((resolve, reject) => {
      api.child(child).once('value', snapshot => {
        const val = snapshot.val()
        // mark the timestamp when this item is cached
        if (val) val.__lastUpdated = Date.now()
        cache && cache.set(child, val)
        resolve(val)
      }, reject)
    })
  }
}

export function fetchIdsByType (type) {
  return api.cachedIds && api.cachedIds[type]
    ? Promise.resolve(api.cachedIds[type])
    : fetch(`${type}stories`)
}

export function fetchItem (id) {
  return fetch(`item/${id}`)
}

export function fetchItems (ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export async function login ({ email, password }) {
  await api
  api.auth().signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.')
      } else {
        alert(errorMessage)
      }
      console.log(error)
    })
}

export async function logout () {
  await api
  api.auth().signOut()
    .catch(function (error) {
      alert(error)
      console.log(error)
    })
}


export async function signup ({ email, password }) {
  await api
  api.auth().createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorMessage = error.message
      alert(errorMessage)
      console.log(error)
    })
}
