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

              <div class = "block h-6 w-6">
                <SVGWrapper name = "bars" />
              </div>
                
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

<SVGWrapper name = "settings" />
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
        md:left-0
        group-hover:translate-x-0
        items-center
        transform
        transition
        duration-500
        ease-in-out
        top-0
        bg-discortics-500 bg-opacity-100
        ${toggleNav
        ?
        'translate-x-0'
        :
        '-translate-x-110'}
      `"
    >
      <div class="block min-h-screen top-0 left-0 bg-discortics-600 fixed p-8 pt-0">
        <div class="flex md:space-y-1 flex-col md:pt-0 pt-10 mt-14">
          <div v-for="{ heading, greyed, routes, icon } in Navigation" :key="heading">
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
                flex flex-row space-x-4
                text-gray-300 text-md
                block
                rounded-md
              ${greyed ? ' cursor-not-allowed' : ''}`"
              :disabled = "greyed"
            >
              <span :class = "`text-yellow-500 my-auto stroke-1 ${toggleNav ? 'visible' : 'visible'}`"><SVGWrapper :name="icon" size = "14" /></span>
                  <span class="py-1">{{ heading }}</span>
            </p>
            <NuxtLink
              v-for="{ name, route, key, routeIcon } in routes"
              :key="key"
              :to="route"
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
                flex flex-row space-x-4
                ${greyed
                ?
                'pointer-events-none text-gray-500'
                :
                'text-gray-300'}`
              "
              :disabled = "greyed"
              ><span><SVGWrapper :name="routeIcon" /></span>
                  <span class="py-1">{{ name }} a{{ $store.state.guild.guild }}</span></NuxtLink
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