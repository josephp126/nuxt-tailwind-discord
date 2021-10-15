<template>
  <div>
    <div class="fixed p-4 bottom-0 right-0 flex flex-col items-center z-40">
      <div
        id="fabItems"
        :class="`transform transition duration-500 ease-in-out ${
          toggleNav ? 'translate-y-0' : 'translate-y-120'
        }`"
      >
        <ul class="p-4 flex-col items-center space-y-10 w-full mx-auto">
          <div v-for="navItem in Navigation" :key="navItem.key">
            <div v-if="Array.isArray(navItem.routes)" :title="navItem.heading">
              <LayoutSubFab
                :NavList="navItem.routes"
                :CustomIcon="navItem.icon"
                :ref="navItem.key"
                FabType="sub"
              />
            </div>
            <a
              v-else
              v-tooltip="{
                placement: 'left',
                content: navItem.name,
                trigger: 'hover',
                classes: 'text-white font-bold text-md',
                html: false,
              }"
              :href="navItem.route"
              class="relative p-2 group flex items-center"
            >
              <li
                class="
                  rounded-full
                  flex
                  items-center
                  p-4
                  w-16
                  h-16
                  bg-discortics-600
                "
              >
                <div class="px-auto flex items-center mx-auto">
                  <SVGWrapper :name="navItem.routeIcon" />
                </div>
              </li>
            </a>
          </div>
        </ul>
      </div>

      <div
        id="fabButton"
        class="
          rounded-full
          bg-discortics-500
          border-maid-border border-opacity-50 border
          flex
          items-center
          w-16
          h-16
          z-50
          bg-opacity-50
          hover:bg-opacity-100
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
    <div
      :class="`inset-0 w-full fixed h-full z-30 block bg-gray-800 bg-opacity-30 ${
        toggleNav ? 'visible' : 'invisible'
      }`"
      @click="toggleAll"
    ></div>
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
      this.toggleNav = !this.toggleNav
      this.toggleChild()
    },
    toggleOn() {
      this.toggleNav = true
    },
    toggleChild() {
      this.NavList.forEach((x) => {
        this.$refs[x.key][0].toggleOff()
      })
    },
    toggleAll() {
      this.toggleChild()
      this.toggleOff()
    },
  },
}
</script>