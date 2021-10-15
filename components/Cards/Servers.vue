<template>
  <div class="p-4 relative">
    <div class = "w-full md:w-72 h-full md:h-72 ">
      <div
        class="
          p-2
          bg-discortics-server
          w-full
          md:h-60
          md:max-w-md
          rounded-md
          transform
          transition
          duration-500
          ease-in-out
          hover:scale-110
          hover:translate-y-1
          block
        "
      >
        <div class="mx-auto p-8 flex-col">
          <img
            class="w-full md:w-24 object-cover mx-auto"
            :src="icon ? `https://cdn.discordapp.com/icons/${gID}/${icon}.png` : `/img/user_icon.png`"
            alt="server icon"
          />
          <p class="font-semibold p-2 text-center">{{ name }}</p>
          <div class="absolute text-center mx-auto -bottom-4 inset-x-8 p-2">
            <a
              v-if="exists"
              @click="moveToDash"
              class="
                block
                transition
                duration-300
                text-gray-300
                p-2
                ease-in-out
                flex
                items-center
                flex-wrap
                bg-blue-500
                border border-white
                rounded-md
                hover:text-white
              "
            >
              <span class="text-center mx-auto">Select</span>
            </a>
            <a
              v-else
              :href="`https://discord.com/api/oauth2/authorize?client_id=739735540483752006&permissions=2081287415&scope=bot${
                gID ? ('&guild_id=' + gID) : ''
              }`"
              class="
                block
                transition
                duration-300
                text-gray-300
                p-2
                ease-in-out
                flex
                items-center
                flex-wrap
                bg-red-500
                border border-white
                rounded-md
                hover:text-white
              "
            >
              <span class="text-center mx-auto">Invite</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
                return ""
            }
        },
        exists: {
            type: Boolean,
            default() {
                return false;
            }
        }
    },
    methods: {
        moveToDash() {
            console.log({gID: this.gID})
            localStorage.setItem("guildID", this.gID)
            localStorage.setItem("guildName", this.name)
            localStorage.setItem("guildIcon", this.icon ? `https://cdn.discordapp.com/icons/${this.gID}/${this.icon}.png` : `/img/user_icon.png`)
            this.$router.push('/dashboard/main')

        }
    }
}
</script>