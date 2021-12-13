<template>
  <header class="p-0 lg:p-4 lg:hidden top-0 fixed z-50 font-montserrat">
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
        lg:absolute lg:top-0 lg:left-0 lg:rounded-t-md
        bg-discortics-header
        border-maid-border border-opacity-70 border-b
        z-50
      "
    >
      <div class="mx-auto px-2 lg:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="relative inset-y-0 left-0 flex items-center">
            <button
              :class="`inline-flex items-center lg:pointer-events-none ${
                toggleNav ? 'hidden' : 'block'
              } justify-center p-2 group rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`"
              aria-expanded="false"
              @click="toggleBoth"
            >
              <span class="sr-only">Open menu</span>

              <div class="block h-8 w-8">
                <img
                  v-if="typeof icon == 'string'"
                  :src="icon"
                  :title="guildName"
                />
                <SVGWrapper v-else name="helpcircle" />
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
                <p class="p-2 text-2xl block font-bold">{{ Constants.Name }}</p>
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
                <SVGWrapper name="settings" />
              </button>
              <div
                :class="`
                  flex
                  w-72
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
                  ${tSettings ? 'translate-y-10' : '-translate-y-120 lg:ml-6'}
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
        lg:left-0
        group-hover:translate-x-0
        items-center
        transform
        transition
        duration-500
        ease-in-out
        top-0
        bg-discortics-header bg-opacity-100
        ${toggleNav ? 'translate-x-0' : '-translate-x-110'}
      `"
    >
      <div
        class="
          block
          min-h-screen overflow-x-scroll max-h-screen
          top-0
          left-0
          bg-discortics-header
          fixed
          p-8
          pt-0
        "
      >
        <div class="flex lg:space-y-1 flex-col lg:pt-0 pt-10 mt-14">
          <div v-for="{ heading, greyed, routes } in Navigation" :key="heading">
            <div
              v-for="{ name, route, key, routeIcon } in routes"
              :key="key"
              :class="`${
                title === key ? '' : ''
              } w-full p-px py-1 flex flex-row items-center justify-start`"
            >
              <div
                :class="`${
                  title === key ? 'block' : 'hidden'
                } absolute -left-2 flex flex-row items-center`"
              >
                <SVGNewPointer :size="34" />
              </div>
              <NuxtLink
                :to="route"
                :class="`${
                  title === key ? 'bg-sidebarselectedbox' : 'text-gray-300'
                }
                tracking-wide
                p-1.5
                transition
                duration-300
                ease-in-out
                capitalize
                h-12
                ${toggleNav ? 'w-full rounded-xl justify-start' : 'w-12 rounded-xl justify-center'} group-hover:w-full
                group-hover:rounded-xl
                text-sm
                font-medium
                hover:bg-sidebarselectedbox
                hover:bg-opacity-100
                hover:text-discortics-link
                block
                rounded-md space-x-4 items-center
                flex flex-row group-hover:justify-start
`"
                :disabled="greyed"
                ><span
                  ><SVGNewWrapper :name="routeIcon" :size="34"
                /></span>
                <span
                  :class="`${
                    title === key
                      ? 'bg-navCurrent text-transparent bg-clip-text'
                      : 'text-gray-300'
                  } font-quicksand text-body15 font-bold ${toggleNav ? 'block' : 'hidden'} group-hover:block`"
                  >{{ name }}</span
                ></NuxtLink
              >
            </div>
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
      default: null,
    },
  },
  data() {
    return {
      icon: localStorage.getItem('guildIcon'),
      guildName: localStorage.getItem('guildName'),
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
<style>
a.naviconselected span div svg path,a.navicon:hover span div svg path {
    fill: #8BADFF;
    stroke: #8BADFF;
    box-shadow: 0px 3px 7px rgba(89, 136, 255, 0.3), inset 0px 2px 5px rgba(255, 255, 255, 0.3);
}
</style>