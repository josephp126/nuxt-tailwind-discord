<template>
  <div class="hidden lg:flex flex-row items-start justify-between ml-4">
    <div :class="`${ $route.name === 'dashboard' ? 'hidden ' : '' }flex flex-row items-center my-auto`">
      <TopbarSearch ref = "search" />
    </div>
    <div :class="`${ $route.name === 'dashboard' ? 'hidden ' : '' }flex flex-row items-center ml-auto`">
      <TopbarServer ref = "server"/>
    </div>
    <div class="flex flex-row items-center ml-auto">
      <TopbarSettings ref = "settings"/>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toggleOff() {
        this.$refs.server[0].toggleOff()
        this.$refs.settings[0].toggleOff()
    }
  }
}
</script>