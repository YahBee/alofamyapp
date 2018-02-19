import Firebase from 'firebase'
// import 'firebase/firestore'

export function createAPI ({ config, version }) {
  let api
  // this piece of code may run multiple times in development mode,
  // so we attach the instantiated API to `process` to avoid duplications
  if (process.__API__) {
    api = process.__API__
  } else {
    api = process.__API__ = Firebase.initializeApp(config)

    api.onServer = true
  }
  return api
}
