<template>
  <div class="p-2 relative w-full md:max-w-sm">
    <div class="w-full h-full md:h-40">
      <div
        class="
          relative
          overflow-hidden
          form-card
          w-full
          md:w-80
          h-52
          md:h-36
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
            h-40 md:h-36
            rounded-md
            transform
            filter
            blur-3xl
            transition
            duration-500
            ease-in-out
            hover:translate-y-1
            block
          "
          :style="`background-image: url(${bgIMG})`"
        />
        <img
          src="/img/overlay.png"
          class="
            w-full
            h-full
            absolute
            object-cover
            inset-0
            bg-black bg-opacity-80
            z-20
          "
        />
        <div class="gradient-circle w-24 h-24 absolute right-2 top-2 z-30" />

        <div class="w-full h-full z-40 absolute inset-0">
          <div
            class="
              mx-auto
              flex flex-col
              md:flex-row
              justify-start
              w-full
              h-full
            "
          >
            <div class="flex items-center p-2 w-full md:w-36">
              <img
                class="w-20 h-20 mx-auto z-30"
                :src="
                  icon
                    ? `https://cdn.discordapp.com/icons/${gID}/${icon}.png`
                    : `/img/user_icon.png`
                "
                alt="server icon"
                style="box-shadow: 0px 26px 11px -14px rgba(0, 0, 0, 0.52)"
              />
            </div>
            <div
              class="
                flex flex-col
                w-full
                h-20 my-auto
                justify-start
                items-center
                text-center
                relative
                md:text-left md:items-start
              "
            >
            <div class="absolute mx-auto -bottom-2 md:-bottom-6 md:right-2">
            <div class="text-center p-2 w-24">
              <a
                v-if="exists"
                @click="moveToDash"
                class="
                  block
                  w-full
                  transition
                  duration-300
                  p-2
                  hover:translate-y-1
                  ease-in-out
                  flex
                  transform
                  items-center
                  flex-wrap
                  bg-gradient-to-l
                  from-button-initial
                  to-button-through
                  rounded-md
                  hover:text-white
                "
              >
                <span class="text-center text-sm mx-auto">Manage</span>
              </a>
              <a
                v-else
                :href="`https://discord.com/api/oauth2/authorize?client_id=739735540483752006&permissions=2081287415&scope=bot${
                  gID ? '&guild_id=' + gID : ''
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
              <p class="font-semibold text-sm p-px">{{ name }}</p>
              <p class="text-xs p-px">Manager</p>
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
    name: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    gID: {
      type: String,
      default() {
        return ''
      },
    },
    exists: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  computed: {
    bgIMG() {
      return `https://cdn.discordapp.com/icons/${this.gID}/${this.icon}.png`
    },
  },
  methods: {
    moveToDash() {
      console.log({ gID: this.gID })
      localStorage.setItem('guildID', this.gID)
      localStorage.setItem('guildName', this.name)
      localStorage.setItem(
        'guildIcon',
        this.icon
          ? `https://cdn.discordapp.com/icons/${this.gID}/${this.icon}.png`
          : `/img/user_icon.png`
      )
      this.$router.push('/dashboard/main')
    },
  },
}
</script>