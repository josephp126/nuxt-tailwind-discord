<template>
  <div class="p-2 relative lg:max-w-sm">
    <div class="w-full h-full">
      <div
        class="
          relative
          overflow-hidden
          form-card
          min-w-xs w-96
          lg:w-72
          h-52
          lg:h-36
          rounded-md
          bg-blend-overlay
          block
        "
      >
        <div
          class="
            absolute
            inset-0
            overflow-hidden
            form-card
            bg-cover bg-center
            w-full
            h-40
            lg:h-36
            rounded-md
            transform
            filter
            blur-2xl
            transition
            duration-500
            ease-in-out
            hover:translate-y-1
            block
          "
          :style="`background-image: url(${bgIMG})`"
        />
        <img
          v-if="guild.exists"
          src="/img/overlay.png"
          class="
            w-full
            h-full
            absolute
            object-cover
            inset-0
            bg-black bg-opacity-60
            z-20
          "
        />
        <div
          v-if="!guild.exists"
          src="/img/overlay.png"
          class="
            w-full
            h-full
            absolute
            object-cover
            inset-0
            bg-black bg-opacity-40
            z-20
          "
        />
        <div class="gradient-circle w-24 h-24 absolute right-2 top-2 z-30" />

        <div class="w-full h-full z-40 absolute inset-0">
          <div
            class="
              mx-auto
              flex flex-col
              lg:flex-row
              justify-start
              w-full
              h-full
            "
          >
            <div class="flex items-center p-2 w-full lg:w-36">
              <img
                class="w-20 h-20 mx-auto z-30 rounded-md"
                :src="
                  guild.icon
                    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${guild.icon.startsWith('a_') ? 'gif' : 'png'}`
                    : `/img/user_icon.png`
                "
                alt="server icon"
                style="-webkit-filter: drop-shadow( 0px 26px 11px rgba(0, 0, 0, 0.52));filter: drop-shadow( 0px 26px 11px rgba(0, 0, 0, 0.52))"
              />
            </div>
            <div
              class="
                flex flex-col
                w-full
                h-20
                my-auto
                justify-start
                items-center
                text-center
                relative
                lg:text-left lg:items-start
              "
            >
              <div class="absolute mx-auto -bottom-2 lg:-bottom-6 lg:right-2">
                <div class="text-center p-2 w-24">
                  <a
                    v-if="guild.exists"
                    @click="moveToDash"
                    style="background: linear-gradient(90deg, #7875fc 0%, rgba(245, 134, 196, 0.688692) 192.87%, rgba(249, 174, 131, 0) 619.55%);"
                    class="
                      block
                      w-full
                      transition
                      duration-300 cursor-pointer
                      p-2
                      hover:translate-y-1
                      ease-in-out
                      flex
                      transform
                      items-center
                      flex-wrap
                      font-montserrat
                      rounded-md
                      hover:text-white
                    "
                  >
                    <span class="text-center font-semibold text-sm mx-auto">Manage</span>
                  </a>
                  <a
                    v-else
                    :href="`https://discord.com/api/oauth2/authorize?client_id=739735540483752006&permissions=2081287415&scope=bot${
                      guild.id ? '&guild_id=' + guild.id : ''
                    }`"
                    class="
                      block
                      w-full
                      transition
                      duration-300
                      transform
                      hover:translate-y-1
                      p-2
                      ease-in-out
                      font-montserrat
                      flex
                      items-center
                      flex-wrap
                      bg-gray-300 bg-opacity-10
                      rounded-md
                      hover:text-white
                    "
                  >
                    <span class="text-center text-sm mx-auto">Invite</span>
                  </a>
                </div>
              </div>
              <p class="overflow-hidden font-bold text-md p-px pr-2">{{ guild.name }}</p>
              <p class="text-xs p-px">{{ guild.userType }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/*
.server-card {
  background: var(--bg-image);
}
*/
</style>

<script>
export default {
  props: {
    guild: {
      type: Object,
      default: null,
    },
  },
  computed: {
    bgIMG() {
      return `https://cdn.discordapp.com/icons/${this.guild.id}/${this.guild.icon}.png`
    },
  },
  methods: {
    moveToDash() {
      console.log({ gID: this.guild.id })
      localStorage.setItem('guildID', this.guild.id)
      localStorage.setItem('guildName', this.guild.name)
      localStorage.setItem(
        'guildIcon',
        this.guild.icon
          ? `https://cdn.discordapp.com/icons/${this.guild.id}/${this.guild.icon}.png`
          : `/img/user_icon.png`
      )
      this.$router.push('/dashboard/main')
    },
  },
}
</script>