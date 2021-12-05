
<template>
  <div id="dropdown" class="rounded-xl bg-discortics-100 border-gray-700 border-2">
          <div
      :class="`inset-0 w-full fixed h-full z-10 block ${
        dropOpen ? 'visible' : 'invisible'
      }`"
      @click="toggleOff"
     />
    <div id="dropdown-stuff" class="h-16 w-full p-2 relative flex flex-col items-center">
      <div id = "default-stuff" class="w-full flex flex-row items-center p-2 cursor-pointer" @click = "toggleDrop">
        <div class="flex flex-row h-full items-center justify-center">
          <img
            class="object-cover w-9 h-9"
            :src="guild.icon"
            alt="server icon"
          />
        </div>
        <div class="text-sm font-semibold px-1">
          {{ guild.name }}
        </div>
        <div class="text-gray-300"><SVGDown /></div>
      </div>
      <div id = "choice-stuff" :class="`z-30 bg-gradient-to-l border border-gray-600 rounded-xl w-full p-2 divide-y divide-gray-600 h-24 overflow-y-scroll from-discortics-header via-discortics-header to-discortics-header absolute flex flex-col items-start -bottom-28 ${dropOpen ? 'block' : 'hidden'}`">
        <div v-if="$fetchState.pending">
          <div class="text-md">Loading...</div>
        </div>
        <div v-else-if="$fetchState.error">
          <div class="text-md">An error occured :(</div>
          (
        </div>
        <div
          v-else
          v-for="server in servers"
          :key="server.id"
          class="flex flex-row items-center hover:bg-gray-800 p-2 w-full cursor-pointer"
          @click="server.id == guild.id ? (x) => {} : (x) => switchServer(server)"
        >
          <div class="flex flex-row h-full items-center justify-center">
            <img
              class="object-cover w-10 h-10"
              :src="
                server.icon
                  ? `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`
                  : `/img/user_icon.png`
              "
              alt="server icon"
            />
          </div>
          <div
            class="text-sm font-semibold px-1"
          >
            {{ server.name }}
          </div>
          <div class="text-gray-300 invisible"><SVGDown /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MapperMap from '@/helper/mappermap'

export default {
  data() {
    const curId = localStorage.getItem('guildID')
    const curName = localStorage.getItem('guildName')
    const curIcon = localStorage.getItem('guildIcon')
    return {
      servers: [],
      guild: { id: curId, name: curName, icon: curIcon },
      dropOpen: false,
    }
  },
  async fetch() {
    const token = localStorage.getItem('sessionToken')
    const allServers = await this.$api.$request({
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

    this.servers = guilds
      .filter((x) => x.exists)
      .map((x) => ({
        name: x.name,
        icon: x.icon,
        id: x.id,
        exists: x.exists,
        userType: this.$_.capitalize(x.userType),
      }))
  },
  methods: {
    toggleDrop() {
      this.dropOpen = !this.dropOpen
    },
    toggleOff() {
        this.dropOpen = false;
    },
    switchServer(guild) {
      localStorage.setItem('guildID', guild.id)
      localStorage.setItem('guildName', guild.name)
      localStorage.setItem(
        'guildIcon',
        guild.icon
          ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
          : `/img/user_icon.png`
      )
      this.$nuxt.refresh()
    },
  },
}
</script>