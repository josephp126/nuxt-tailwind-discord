<template>
    <div
      :class="`
        z-40
        hidden md:block
        flex-1 flex
        fixed
        md:left-0
        items-center
        transform
        transition
        duration-500
        ease-in-out
        top-0
        bg-discortics-header
      `"
    >
      <div
        class="block min-h-screen top-0 left-0 bg-discortics-header fixed p-8 pt-0"
      >
        <div class="flex md:space-y-1 flex-col md:pt-0 pt-10 mt-14">
            <div> 
                <img
                  class="h-12 w-auto p-2"
                  src="/img/90x90.png"
                  alt="Discortics"
                />
            </div>
          <div
            v-for="{ heading, greyed, routes } in Navigation"
            :key="heading"
            class = "flex flex-col items-center"
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
              ${greyed ? ' cursor-not-allowed' : ''}`"
              :disabled="greyed"
            >
              <span
                :class="`text-yellow-500 my-auto mx-auto text-center stroke-1`"
                ><hr class = "border border-discortics-line" /></span>
              <span class="py-1 tooltiptext">{{ heading }}</span>
            </p>
            <NuxtLink
              v-for="{ name, route, key, routeIcon } in routes"
              :key="key"
              :to="route"
              :class="`${title === key ? 'text-discortics-link' : ''}
                
                tracking-wide
                px-3
                transition
                tooltip
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
                ${
                  greyed
                    ? //                'pointer-events-none text-gray-500'
                      'text-gray-300'
                    : 'text-gray-300'
                }`"
              :disabled="greyed"
              ><span><SVGWrapper :name="routeIcon" /></span>
              <span class="py-1 tooltiptext"
                >{{ name }}</span
              ></NuxtLink
            >
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