export const state = () => ({
    guild: null,
})

export const mutations = {
    set(state, guild) {
        state.guild = guild
    }
}
