export const state = () => ({
  loggedIn: false,
  token: null,
  expires: null,
  currentGuild: null
})

export const mutations = {
  toggle(state) {
    state.loggedIn = !state.loggedIn
  },
  set(state, text, expires) {
    state.token = text;
    state.expires = expires;
  },
  setGuild(state, guildID) {
      state.currentGuild = guildID;
  }
}
