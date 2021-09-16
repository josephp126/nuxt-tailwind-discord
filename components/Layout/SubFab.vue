<template>
  <div class="p-2 w-full">
    <div
      :class="`inset-x-0 w-full mx-auto block p-2 flex flex-row items-center z-40`"
    >
      <div
        id="fabItems"
        :class="`transform absolute right-10 p-2 transition duration-500 ease-in-out z-40 ${
          toggleNav ? 'translate-x-0' : 'translate-x-120'
        }`"
      >
        <ul :class="`p-4 flex flex-row justify-center space-x-1`">
          <div v-for="navItem in Navigation" :key="navItem.key">
            <NuxtLink
              v-tooltip="{
                placement: 'top',
                content: navItem.name,
                trigger: 'hover',
                classes: 'text-white font-bold text-md block z-100 bg-discortics-container p-1 rounded-md',
                html: false,
              }"
              :to="navItem.route"
              class="relative p-2 group flex items-center block z-50"
            >
              <li
                class="
                  rounded-full
                  flex
                  items-center
                  p-4
                  w-16
                  h-16
                  bg-discortics-200
                "
              >
                <div class="px-auto flex items-center mx-auto">
                  <SVGWrapper :name="navItem.routeIcon" />
                </div>
              </li>
            </NuxtLink>
          </div>
        </ul>
      </div>

      <div
        id="fabButton"
        class="
          absolute
          inset-x-0
          mx-auto
          rounded-full
          bg-discortics-500
          flex
          items-center
          w-16
          h-16
          z-50
        "
      >
        <button
          :class="`p-4 transform transition duration-500 ease-in-out mx-auto block ${
            toggleNav ? 'rotate-90' : ''
          }`"
          @click="toggleBoth"
        >
          <SVGWrapper :name="CustomIcon" v-if="!toggleNav" />
          <SVGCross v-if="toggleNav" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Constants from '@/data/Constants'
export default {
  props: {
    NavList: {
      type: Array,
      default: null,
    },
    CustomIcon: {
      type: String,
      default() {
        return 'bars'
      },
    },
    FabType: {
      type: String,
      default() {
        return 'main'
      },
    },
  },
  data() {
    console.log(this.NavList)
    return {
      toggleNav: false,
      Navigation: this.NavList,
      Constants,
    }
  },
  methods: {
    toggleOff() {
      this.toggleNav = false
    },
    toggleBoth() {
      const navto = this.toggleNav
      this.$parent.toggleChild()
      if(navto) this.toggleNav = false
      else this.toggleNav = true 
    },
    toggleOn() {
      this.toggleNav = true
    },
  },
}
</script>