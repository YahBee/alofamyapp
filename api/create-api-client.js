import { initializeApp } from 'firebase/app'
require('firebase/firestore')
export function createAPI ({ config }) {
  import(/* webpackChunkName: "firebase" */ 'firebase/database')
  const api = initializeApp(config)
  window.firebase = api
  return api
}
