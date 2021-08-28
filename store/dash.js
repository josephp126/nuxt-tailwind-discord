export const state = () => ({
    loggedIn: false,
})

export const mutations = {
    toggle(state) {
        state.loggedIn = !state.loggedIn
    }
}
