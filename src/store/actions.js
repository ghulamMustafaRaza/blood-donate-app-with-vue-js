import { auth, database } from 'firebase'

export default {
  login ({commit}, user) {
    auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((loged) => {
        database().ref('users/' + loged.uid)
          .once('value')
          .then(snap => {
            commit('setUser', snap.val())
          })
      })
      .catch(err => {
        alert(err.message)
      })
  },
  signUp ({commit}, user) {
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((loged) => {
        auth().currentUser.updateProfile({
          displayName: user.name
        })
        database().ref('users/' + loged.uid)
          .set(user)
          .then(() => {
            commit('setUser', user)
          })
      })
      .catch(err => {
        alert(err.message)
      })
  },
  fetchDonors ({commit}) {
    database().ref('users').once('value')
      .then(snap => {
        let obj = snap.val()
        let arr = []
        for (let a in obj) {
          arr.push(obj[a])
        }
        commit('setDonors', arr)
      })
  },
  logout ({ commit }) {
    auth()
      .signOut()
      .then(() => {
        commit('setUser', null)
      })
  }
}
