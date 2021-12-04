
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
    const res = await fetch(
      'https://api.discortics.com/v2/signin', 
      {
      method: 'POST',
      headers: {"content-type": "application/json",},
      body: JSON.stringify({token: token.split(" ")[1]}),
    })
    const response = await res.json()
    if(res.status === 200) { 
      console.info(response)     
//    await store.commit('dash/set', response.data.token, Date.now() + 3600000)
    localStorage.removeItem('guildID')
    localStorage.setItem('sessionToken', response.token)
    redirect('/dashboard')
    }
    else {
      redirect('/an-error-occured')
    }
  },
}
</script>