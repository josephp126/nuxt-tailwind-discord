
<template>
  <div>
    <p class="text-white font-semibold text-center text-4xl animate-pulse">
      Please wait. Refreshing...
    </p>
  </div>
</template>

<script>
export default {
  async asyncData({$auth, store, $axios, redirect}) {
    const token = $auth.strategy.token.get()
    const response = await $axios.request({
      url: 'https://api.discortics.com/signin', 
      method: 'post',
      data: {token: token.split(" ")[1]},
    })
//    await store.commit('dash/set', response.data.token, Date.now() + 3600000)
    localStorage.setItem('sessionToken', response.data.token)
    localStorage.removeItem('guildID')
    redirect('/dashboard')
  },
}
</script>