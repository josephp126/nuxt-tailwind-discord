<template>
  <a
    class="
      p-2
      bg-discortics-dashboard bg-opacity-70
      border-maid-border border-opacity-50 border
      rounded-md
      block
      transition
      duration-500
      ease-in-out
      cursor-pointer
      transform
      hover:translate-y-1
    "
  >
    {{ text }}
  </a>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default() {
        return 'Ok'
      },
    },
  },
}
</script>