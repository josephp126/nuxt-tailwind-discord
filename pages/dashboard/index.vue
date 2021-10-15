<template>
  <div class="bg-discortics-dashboard rounded-md">
    <div class="border-b border-dashed border-gray-500">
      <div class="p-4">
        <p class="text-lg">Your Servers</p>
      </div>
    </div>

    <div id="servers" class="widget-content">
      <div
        class="spinner-grow text-secondary align-self-center loader-lg"
      ></div>
      <div class="flex flex-wrap justify-center">
        <CardsServers
          v-for="stuff in servers"
          :key="stuff.name"
          :name="stuff.name"
          :gID="stuff.id"
          :icon="stuff.icon"
          :exists="stuff.exists"
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
  async asyncData({ $api }) {

const token = localStorage.getItem('sessionToken')
    const allServers = await $api.$request({
      url: '/@me/guilds',
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
    })
    console.log(allServers)
    let botServers = await $api.$request(
      {
        url: `/botguilds?ts=${new Date().getTime()}`,
        method: 'post',
        headers: { Authorization: `Bearer ${token}` },
        data: {guilds: allServers.map((x) => x.id)},
      }
    )
    botServers = botServers.botguilds

    const guilds = new MapperMap
    console.log(allServers)
    allServers.forEach((guild) => {
      if (guild.permissions === 2147483647) {
        guild.exists = false
        if (botServers.includes(guild.id)) guild.exists = true
        guilds.set(guild.id, guild)
      }
    })

    return {
      servers: guilds.map((x) => ({
        name: x.name,
        icon: x.icon,
        id: x.id,
        exists: x.exists,
      })),
      serverList: guilds,
    }
  },
}
</script>