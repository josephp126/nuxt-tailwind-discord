<template>
    <div class="py-1 lg:py-4 px-4">
      <div class="mx-auto max-w-xl form-card w-full lg:w-112 relative lg:h-64 overflow-hidden">
        <div class="px-8">
          <div class="gradient-circle w-24 h-24 absolute right-2 top-2" />
          <div class="pt-2">
            <div class="py-2">
              <p class="text-2xl pt-2 pb-1 font-semibold font-montserrat">Language</p>
              <p class="text-sm pt-1 pb-2">
                Do you not prefer English? Change it to a suitable one below!
              </p>
            </div>
          </div>
          <div class="py-2 flex flex-col lg:flex-row items-center mx-auto">
            <div class="group relative">

                <div id="dropdown" class="rounded-xl bg-transparent border-gray-700 border-2">
                  <div
                    :class="`inset-0 w-full fixed h-full z-10 block ${
                      dropOpen2 ? 'visible' : 'invisible'
                    }`"
                    @click="toggleOff2"
                   />
                  <div id="dropdown-stuff" class="h-12 w-72 p-2 relative flex flex-col items-center">
                    <div id = "default-stuff" :key="selected.name" class="my-auto w-full flex flex-row items-center cursor-pointer" @click = "toggleDrop2">
                      <div class="flex flex-row h-full items-center justify-center">
                        <img :src="`/svg/${selected.flag}.svg?raw`" />
                      </div>
                      <div class="text-md font-semibold px-2">
                        {{ selected.name }}
                      </div>
                      <div class="text-gray-300 pl-1 ml-auto mr-1"><SVGDown :class="`${dropOpen2 ? 'transform rotate-180 transition duration-500' : 'transition duration-500'}`" /></div>
                    </div>
                    <div id = "choice-stuff" :class="`z-30 bg-gradient-to-l border border-gray-600 rounded-xl w-full divide-y divide-gray-600 h-32 overflow-y-scroll from-discortics-header via-discortics-header to-discortics-header absolute flex flex-col items-start -bottom-32 ${dropOpen2 ? 'block' : 'hidden'}`">
                      <div
                        v-for="lang in langs"
                        :key="lang.value"
                        :class="`flex flex-row items-center ${ lang.value == selected.value ?  'bg-discortics-dropselected ' : ''}hover:bg-gray-800 px-1 py-2 w-full cursor-pointer`"
                        @click="lang.value == selected.value ? (x) => {} : switchLang(lang)"
                      >
                        <div class="flex flex-row h-full items-center justify-center pl-1">
                          <img :src="`/svg/${lang.flag}.svg?raw`" />
                        </div>
                        <div
                          class="truncate text-md font-semibold px-1"
                        >
                          {{ lang.name }}
                        </div>
                        <div :class="`text-gray-300 ml-auto${ lang.value == selected.value ? '' : ' invisible'}`"><SVGDropSelected /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div
            class="
              flex flex-row flex-wrap
              justify-start
              space-x-2
              py-2
              text-gray-300
              pointer-events-none
            "
          >
            <div
              v-for="example in selected.examples"
              :key="example"
              class="h-8 py-3 flex flex-row items-center">
              <span class="exampleText text-xs p-2">{{ example }}</span>
            </div>
          </div>
        </div>
      </div></div>
</template>

<script>

export default {
  data() {
    const langs = [{
          name: "English",
          value: "english",
          flag: "flagEN",
          examples: ['This is an example',"Hi.","Successful"]
        },{
          name: "Français",
          value: "french",
          flag: "flagFR",
          examples: ['Ceci est un exemple',"Salut.","À succès"]
        },
      ];
    return {
      langs ,
      selected: langs[0],
      dropOpen2: false,
    }
  },
  // async fetch() {
  //   const token = localStorage.getItem('sessionToken')
  //   const allServers = await this.$api.$request({
  //     url: 'v2/@me/guilds',
  //     method: 'get',
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //   const guilds = new MapperMap()
  //   allServers.servers.forEach((guild) => {
  //     if (guild.permissions === 2147483647) {
  //       guild.exists = false
  //       if (guild.botPresent) guild.exists = true
  //       guilds.set(guild.id, guild)
  //     }
  //   })

  //   this.servers = guilds
  //     .filter((x) => x.exists)
  //     .map((x) => ({
  //       name: x.name,
  //       icon: x.icon,
  //       id: x.id,
  //       exists: x.exists,
  //       userType: this.$_.capitalize(x.userType),
  //     }))
  //   const curId = localStorage.getItem('guildID');
  //   const curName = localStorage.getItem('guildName');
  //   const curIcon = localStorage.getItem('guildIcon');
  //   this.guild = { id: curId, name: curName || "Select a Server", icon: curIcon || `/img/user_icon.png` };
  // },
  methods: {
    toggleDrop2() {
      this.dropOpen2 = !this.dropOpen2
    },
    toggleOff2() {
        this.dropOpen2 = false;
    },
    switchLang(lang) {
      this.toggleOff2();
      this.selected = lang;
    },
  },
}
</script>