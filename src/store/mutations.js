export default {
  setUser (state, user) {
    localStorage.setItem('user', user)
    state.user = user
  },
  setDonors (state, donors) {
    state.donors = donors
  }
}
