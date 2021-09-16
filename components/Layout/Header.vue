<script>
import Navigation from '@/data/Navigation'
import Constants from '@/data/Constants'
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      toggleNav: false,
      Navigation,
      Constants,
    }
  },
  methods: {
    toggleOff() {
      this.toggleNav = false
    },
    toggleBoth() {
      this.toggleNav = !this.toggleNav
    },
    toggleOn() {
      this.toggleNav = true
    },
  },
}
</script>
<template>
  <header>
    <div
      class="
        bg-transparent
        max-w-full
        block
        w-full
        fixed
        bg-discortics-500
        z-50
        md:bg-transparent
        md:static
      "
    >
      <div class="max-w-9xl mx-auto px-2 md:px-6 lg:px-8 md:mt-4">
        <div class="relative flex items-center justify-between h-16">
          <div class="relative inset-y-0 left-0 flex items-center md:hidden">
            <button
              class="
                inline-flex
                items-center
                {toggleNav
                ?
                'hidden'
                :
                'block'}
                justify-center
                p-2
                rounded-md
                text-gray-400
                hover:text-white
                focus:outline-none
                focus:ring-2 focus:ring-inset focus:ring-white
              "
              @click="toggleOn"
            >
              <span class="sr-only">Open menu</span>

              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="
              flex-1 flex
              fixed
              md:static
              items-center
              md:items-stretch
              md:justify-start
            "
          >
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/">
                <img
                  class="h-8 w-auto hidden lg:block"
                  src="/img/90x90.png"
                  alt="Discortics"
                />
              </NuxtLink>
            </div>
            <div
              :class="`z-40 block h-full top-0 left-0 bg-black md:bg-transparent fixed md:static transform transition duration-500 ease-in-out md:translate-x-0 p-8 md:p-0 md:block ${
                toggleNav ? 'translate-x-0' : '-translate-x-110 md:ml-6'
              }`"
            >
              <NuxtLink to="/">
                <div
                  class="
                    flex-shrink-0 flex
                    block
                    md:hidden
                    items-center
                    bg-discortics-500
                    top-0
                    left-0
                    absolute
                    w-full
                    h-16
                  "
                >
                  <img
                    class="h-12 w-auto p-2"
                    src="/img/90x90.png"
                    alt="Discortics"
                  />
                  <p class="p-2 text-2xl block md:hidden font-bold">
                    {{ Constants.Name }}
                  </p>
                </div>
              </NuxtLink>

              <div
                class="
                  flex flex-col
                  md:flex-row
                  justify-between
                  space-x-1
                  w-full
                "
              >
                <div
                  class="flex md:space-x-4 flex-col md:flex-row md:pt-0 pt-10"
                >
                  <div
                    v-for="{ name, route, key, icon } in Navigation"
                    :key="key"
                  >
                    <NuxtLink
                      v-if="typeof route === 'string' && route.startsWith('/')"
                      :to="typeof route == 'string' ? route : '#'"
                      :class="
                        (title === key ? 'bg-gray-900 ' : '') +
                        (Array.isArray(route) ? 'group ' : '') +
                        'tracking-wide px-3 flex flex-row space-x-4 md:uppercase py-4 rounded-md text-xs md:text-md font-medium text-gray-300 hover:text-white hover:bg-gray-900 block'
                      "
                    >
                      <span><SVGWrapper :name="icon" /></span>
                      <span class="py-1">{{ name }}</span>
                      <div
                        v-if="Array.isArray(route)"
                        class="
                          absolute
                          flex
                          bg-discortics-quote
                          text-sm
                          p-2
                          rounded-md
                          flex-col
                          invisible
                          md:top-10
                          transform
                          transition
                          duration-300
                          ease-in-out
                          group-focus:translate-y-10 group-focus:visible
                        "
                      >
                        <a
                          v-for="{ name2, route2, key2 } in route"
                          :key="key2"
                          class="
                            p-2
                            flex flex-nowrap
                            text-gray-300
                            hover:text-white
                          "
                          :href="route2"
                          >{{ name2 }}</a
                        >
                      </div>
                    </NuxtLink>
                    <a
                      v-else
                      :href="typeof route == 'string' ? route : '#'"
                      :class="
                        (title === key ? 'bg-gray-900 ' : '') +
                        (Array.isArray(route) ? 'group ' : '') +
                        'tracking-wide px-3 flex flex-row space-x-4 md:uppercase py-4 rounded-md text-xs md:text-md font-medium text-gray-300 hover:text-white hover:bg-gray-900 block'
                      "
                    >
                      <span><SVGWrapper :name="icon" /></span>
                      <span class="py-1">{{ name }}</span>
                      <div
                        v-if="Array.isArray(route)"
                        class="
                          absolute
                          flex
                          bg-discortics-quote
                          text-sm
                          p-2
                          rounded-md
                          flex-col
                          invisible
                          md:top-10
                          transform
                          transition
                          duration-300
                          ease-in-out
                          group-focus:translate-y-10 group-focus:visible
                        "
                      >
                        <a
                          v-for="{ name2, route2, key2 } in route"
                          :key="key2"
                          class="
                            p-2
                            flex flex-nowrap
                            text-gray-300
                            hover:text-white
                          "
                          :href="route2"
                          >{{ name2 }}</a
                        >
                      </div>
                    </a>
                  </div>
                </div>
                <div class="my-auto">
                  <div
                    v-if="$auth.loggedIn"
                    class="mt-3 md:mt-0 md:ml-6 flex flex-grow text-center"
                    key="user"
                  >
                    <div class="pr-1 w-6">
                      <img
                        :src="
                          'https://cdn.discordapp.com/avatars/' +
                          $auth.user.id +
                          '/' +
                          this.$auth.user.avatar +
                          '.webp'
                        "
                        class="w-full rounded-full object-cover"
                      />
                    </div>
                    <a
                      class="
                        transition
                        ease-in-out
                        duration-200
                        font-medium
                        block
                        text-gray-500
                        hover:text-white
                      "
                      @click="
                        (x) => {
                          $auth.logout()
                          $store.commit('dash/toggle')
                        }
                      "
                    >
                      {{ $auth.user.username }}
                    </a>
                  </div>

                  <div
                    v-else
                    class="mt-3 md:mt-0 md:ml-6 flex flex-grow text-center"
                    key="user"
                  >
                    <NuxtLink
                      class="
                        transition
                        ease-in-out
                        duration-200
                        font-medium
                        block
                        text-gray-500
                        hover:text-white
                      "
                      to="/login"
                    >
                      Login with Discord
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="`inset-0 w-full md:invisible fixed h-full z-30 block ${
                toggleNav ? 'visible bg-gray-100 bg-opacity-10' : 'invisible'
              }`"
              @click="toggleOff"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>