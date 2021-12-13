<template>
  <div class="bg-discortics-dashboard rounded-md">
    <div class="py-2">
      <div class="p-4 flex flex-col items-start space-y-1">
        <span class="text-2xl bg-navCurrent text-transparent bg-clip-text font-bold font-montserrat">Your Servers</span>
        <span class = "text-sm">Manage your servers here!</span>
      </div>
    </div>

    <div id="servers" class="widget-content">
      <div
        class="spinner-grow text-secondary align-self-center loader-lg"
      ></div>
      <div class="flex flex-col md:flex-row flex-wrap items-center md:items-start">
        <CardsServers
          v-for="stuff in servers"
          :key="stuff.name"
          :guild="stuff"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MapperMap from '@/helper/mappermap'
export default {
  layout: 'dashboard',
  /*
async asyncData(context) {
    console.log('eee')
    console.log(context.$auth.loggedIn)

if (context.$auth.loggedIn) {
             console.log("check")
      await context.$auth.$storage.setState('connected', false)

      if (!context.$auth.$storage.getState('connected')) {
        const result = await context.$api.post('/signin', {
          token: context.$auth.strategy.token.get(),
        })
        console.log(result.data)
        context.$auth.$storage.setState('connected', result)
      }
    } else if (context.$auth.$storage.getState('connected')) {
        console.log("yee")
      await context.$auth.$storage.setState('connected', false)
    }
    
    
  },
  */
  async asyncData({ $api, $_ }) {

const token = localStorage.getItem('sessionToken')
    const allServers = await $api.$request({
      url: 'v2/@me/guilds',
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
    })
    const guilds = new MapperMap()
    allServers.servers.forEach((guild) => {
      if (guild.permissions === 2147483647) {
        guild.exists = false
        if (guild.botPresent) guild.exists = true
        guilds.set(guild.id, guild)
      }
    })

    return {
      servers: guilds.map((x) => ({
        name: x.name,
        icon: x.icon,
        id: x.id,
        exists: x.exists,
        userType: $_.capitalize(x.userType)
      })).sort((a, b) => a.exists === b.exists ? 0 : a.exists ? -1 : 1),
      serverList: guilds,
    }
  },
}
</script>