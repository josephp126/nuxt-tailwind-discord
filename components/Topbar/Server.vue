
<template>
  <div id="dropdown" class="rounded-xl bg-discortics-100 border-gray-700 border-2 hover:border-selectorhighlight active:border-selectorhighlight">
          <div
      :class="`inset-0 w-full fixed h-full z-10 block ${
        dropOpen ? 'visible' : 'invisible'
      }`"
      @click="toggleOff"
     />
    <div id="dropdown-stuff" class="h-14 w-full lg:w-64 p-2 relative flex flex-col items-center">
      <div v-if="$fetchState.pending" id = "default-stuff" class="w-full flex flex-row items-center p-1 cursor-pointer" :key="guild.id" @click = "toggleDrop">
        <div class="flex flex-row h-full items-center justify-center">
          <div class="object-cover bg-gray-600 h-9 w-9 rounded-full">
            </div>
        </div>
        <div class="text-sm font-semibold px-1 ml-2 bg-gray-600 h-6 w-full rounded-md">
            </div>
        <div class="text-gray-300 pl-1 ml-auto mr-1"><SVGDown :class="`${dropOpen ? 'transform rotate-180 transition duration-500' : 'transition duration-500'}`" /></div>
      </div>
      <div v-else id = "default-stuff" class="w-full flex flex-row items-center p-1 cursor-pointer" :key="guild.id" @click = "toggleDrop">
        <div class="flex flex-row h-full items-center justify-center">
          <img
            class="object-cover w-9 h-9 rounded-xl"
            :src="guild.icon"
            alt="server icon"
          />
        </div>
        <div class="text-sm font-semibold px-2">
          {{ guild.name }}
        </div>
        <div class="text-gray-300 pl-1 ml-auto mr-1"><SVGDown :class="`${dropOpen ? 'transform rotate-180 transition duration-500' : 'transition duration-500'}`" /></div>
      </div>
      <div id = "choice-stuff" :class="`z-30 bg-gradient-to-l border border-gray-600 rounded-xl w-full divide-y divide-gray-600 h-32 overflow-y-scroll from-discortics-header via-discortics-header to-discortics-header absolute flex flex-col items-start -bottom-32 ${dropOpen ? 'block' : 'hidden'}`">
        <div v-if="$fetchState.pending" class="items-center hover:bg-gray-800 p-2 w-full cursor-pointer">
          <div v-for="server of [1,2,3]" :key="server" class="flex flex-row animate-pulse items-center hover:bg-gray-800 p-2 w-full cursor-pointer">
            <div class="flex flex-row items-center justify-center  bg-gray-600 h-10 w-16 rounded-full pl-1">
            </div>
            <div
              class="truncate text-sm font-semibold px-1 ml-2 bg-gray-600 h-6 w-full rounded-md"
            >
            </div>
          </div>
        </div>
        <div v-if="$fetchState.error" class="items-center hover:bg-gray-800 p-2 w-full cursor-pointer">
          <div v-for="server of [1,2,3]" :key="server" class="flex flex-row animate-pulse items-center hover:bg-gray-800 p-2 w-full cursor-pointer">
            <div class="flex flex-row items-center justify-center  bg-gray-600 h-10 w-16 rounded-full pl-1">
            </div>
            <div
              class="truncate text-sm font-semibold px-1 ml-2 bg-gray-600 h-6 w-full rounded-md"
            >
            </div>
          </div>
        </div>
        <div
          v-else
          v-for="server in servers"
          :key="server.id"
          :class="`flex flex-row items-center ${ guild.id == server.id ?  'bg-discortics-dropselected ' : ''}hover:bg-gray-800 px-1 py-2 w-full cursor-pointer`"
          @click="server.id == guild.id ? (x) => {} : switchServer(server)"
        >
          <div class="flex flex-row h-full items-center justify-center pl-1">
            <img
              class="object-cover w-10 h-10 max-w-md rounded-xl"
              :src="
                server.icon
                  ? `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`
                  : `/img/user_icon.png`
              "
              alt="server icon"
            />
          </div>
          <div
            class="truncate text-sm font-semibold px-1"
          >
            {{ server.name }}
          </div>
          <div :class="`text-gray-300 ml-auto${guild.id == server.id ? '' : ' invisible'}`"><SVGDropSelected /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MapperMap from '@/helper/mappermap'

export default {
  data() {
    return {
      servers: [],
      get guild() {
        return { id: localStorage.getItem('guildID'), name: localStorage.getItem('guildName') || "Select a Server", icon: localStorage.getItem('guildIcon') || `/img/user_icon.png` };
      },
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
    const curId = localStorage.getItem('guildID');
    const curName = localStorage.getItem('guildName');
    const curIcon = localStorage.getItem('guildIcon');
    this.guild = { id: curId, name: curName || "Select a Server", icon: curIcon || `/img/user_icon.png` };
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
      this.toggleOff();
      this.guild = { id: guild.id, name: guild.name || "Select a Server", icon: guild.icon
          ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
          : `/img/user_icon.png` };
    },
  },
}
</script>