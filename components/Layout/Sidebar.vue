<template>
  <header class="p-0 md:p-4">
    <div
      :class="`inset-0 w-full fixed h-full z-30 block ${
        toggleNav || tSettings ? 'visible' : 'invisible'
      }`"
      @click="toggleAllOff"
    ></div>

    <div
      class="
        w-full
        rounded-none
        block
        w-full
        fixed
        md:absolute
        md:top-0
        md:left-0
        md:rounded-t-md
        bg-discortics-500
        z-50
      "
    >
      <div class="mx-auto px-2 md:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="relative inset-y-0 left-0 flex items-center">
            <button
              :class="`inline-flex items-center ${
                toggleNav ? 'hidden' : 'block'
              } justify-center p-2 group rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`"
              aria-expanded="false"
              @click="toggleBoth"
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
            <a href="/" :class="toggleNav ? 'block' : 'hidden'">
              <div
                class="
                  flex-shrink-0 flex
                  block
                  items-center
                  relative
                  top-0
                  left-0
                  w-full
                  h-16
                "
              >
                <img
                  class="h-12 w-auto p-2"
                  src="/img/90x90.png"
                  alt="Discortics"
                />
                <p class="p-2 text-2xl block font-bold">{{Constants.Name}}</p>
              </div>
            </a>
          </div>

          <ul class="navbar-item flex-row ml-auto">
            <li class="">
              <button
                id="userProfileDropdown"
                class="nav-link dropdown-toggle user"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="settingsBoth"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-settings"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                  />
                </svg>
              </button>
              <div
                :class="`
                  flex
                  w-48
                  h-auto
                  right-0
                  max-w-md
                  block
                  z-40
                  transform
                  shadow-md
                  transition
                  duration-500
                  ease-in-out
                  absolute
                  ${tSettings
                  ?
                  'translate-y-10'
                  :
                  '-translate-y-120 md:ml-6'}
                `"
              >
                <CardsSettings />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      :class="`
        z-40
        flex-1 flex
        fixed
        md:absolute
        md:left-0
        group-hover:translate-x-0
        items-center
        transform
        transition
        duration-500
        ease-in-out
        bg-discortics-500 bg-opacity-100
        ${toggleNav
        ?
        'translate-x-0'
        :
        '-translate-x-110'}
      `"
    >
      <div class="block min-h-screen top-0 left-0 bg-discortics-500 fixed p-8">
        <div class="flex md:space-y-1 flex-col md:pt-0 pt-10 mt-10">
          <div v-for="{ heading, greyed, routes } in Navigation" :key="heading">
            <p
              :class="`
                tracking-wide
                px-3
                uppercase
                py-4
                pl-2
                rounded-md
                text-md
                font-semibold
                text-gray-300 text-md
                block
                rounded-md
              ${greyed ? ' cursor-not-allowed' : ''}`"
              :disabled = "greyed"
            >
              {{ heading }}
            </p>
            <a
              v-for="{ name, route, key } in routes"
              :key="key"
              :href="route"
              :class="
                `${title
                ===
                key
                ?
                'text-discortics-link'
                :
                ''}
                
                tracking-wide
                px-3
                transition
                duration-300
                ease-in-out
                capitalize
                py-2
                rounded-md
                text-sm
                font-medium
                hover:text-discortics-link
                block
                rounded-md
                ${greyed
                ?
                'pointer-events-none text-gray-500'
                :
                'text-gray-300'}`
              "
              :disabled = "greyed"
              >{{name}}</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from '@/data/SideBarNav'
import Constants from '@/data/Constants'
export default {
  props: {
      title: {
          type: String,
          default: null
      }
  },
  data() {
    return {
      toggleNav: false,
      tSettings: false,
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
    settingsOn() {
      this.tSettings = true
    },
    settingsOff() {
      this.tSettings = false
    },
    settingsBoth() {
      this.tSettings = !this.tSettings
    },
    toggleAllOff() {
      this.toggleOff()
      this.settingsOff()
    },
  },
}
</script>