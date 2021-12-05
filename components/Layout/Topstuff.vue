<template>
  <div class="hidden md:flex flex-row items-start justify-between ml-28">
    <div class="flex flex-row items-center">
      <TopbarSearch ref = "search" />
    </div>
    <div class="flex flex-row items-center">
      <TopbarServer ref = "server"/>
    </div>
    <div class="flex flex-row items-center">
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