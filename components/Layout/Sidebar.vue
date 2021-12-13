<template>
  <div class="p-4 fixed h-full font-montserrat z-50">
    <div
      :class="`
        z-40 h-full
        rounded-xl
        hidden lg:block
        flex-none flex
        lg:left-0
        items-center
        overflow-hidden
        transform
        group flex flex-col
        relative
        transition-all
        duration-500
        ease-in-out
        ${toggleNav ? 'w-64' : 'w-24'}
        hover:w-64
        top-0           overflow-y-scroll

        bg-discortics-header
      `"
    >
      <div
        class="
          block
          top-0
          left-0
          bg-gradient-to-b
          from-discortics-header
          via-discortics-headervia
          to-discortics-headerto
          sticky
          flex-1
          p-4
          pt-0
          overflow-hidden
        "
      >
        <div :class="`flex lg:space-y-1 flex-col ${toggleNav ? 'items-start' : 'items-center'} group-hover:items-start lg:pt-0 pt-10 mt-10`">
          <div class="flex flex-row justify-start items-center mx-auto" @click="toggleBoth">
            <img
              class="h-12 w-auto"
              src="/img/90x90.png"
              alt="Discortics"
            />
          </div>
          <div
            v-for="{ heading, greyed, routes } in Navigation"
            :key="heading"
            :class="`flex flex-col items-center ${toggleNav ? 'w-full' : ''} group-hover:w-full`"
          >
            <p
              :class="`
                tracking-wide
                px-3
                w-full
                uppercase
                py-4
                rounded-md
                text-md
                text-center
                font-semibold
                flex flex-row space-x-4
                items-center
                justify-center
                text-gray-300 text-md
                block
                tooltip
                rounded-md
              `"
              :disabled="greyed"
            >
              <span
                :class="`text-yellow-500 my-auto mx-auto text-center stroke-1`"
                ><hr class="border border-discortics-line"
              /></span>
              <span class="py-1 tooltiptext">{{ heading }}</span>
            </p>
            <div
              v-for="{ name, route, key, routeIcon } in routes"
              :key="key"
              :class="`${
                title === key ? '' : ''
              } w-full p-px py-1 pl-4 flex flex-row items-center justify-start`"
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
                  title === key ? 'bg-sidebarselectedbox naviconselected' : 'text-gray-300'
                }
                tracking-wide
                navicon
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
                  } py-2t font-quicksand text-body15 font-bold ${toggleNav ? 'block' : 'hidden'} group-hover:block`"
                  >{{ name }}</span
                ></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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