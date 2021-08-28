<template>
  <div
    :class="`animate-ping px-2 w-${1 + recursive} h-${1 + recursive} ml-${
      mainS ? '0' : '0.5'
    } mt-${mainS ? '0' : '0.5'} rounded-full border border-gray-300`"
  >
      <ItemPing v-if="recursive" :recursive="recursive - 1" :mainS="false" />
  </div>
</template>
<script>
export default {
  props: {
    recursive: {
      type: Number,
      default() {
        return 0
      },
    },
    mainS: {
      type: Boolean,
      default() {
        return true
      },
    },
  },
}
</script>