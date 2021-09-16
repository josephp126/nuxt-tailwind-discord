<template>
  <div class="w-full h-4 rounded-full bg-discortics-header relative">
    <div
      class="
        p-2
        h-full
        rounded-md
        bg-gradient-to-r
        from-yellow-300
        via-yellow-500
        to-red-500
      "
      :style="`width: ${((progress - min) * 100) / (max - min)}%`"
    />
    <div
      class="
        absolute
        text-white text-xs
        font-bold
        top-0
        text-center
        w-full
        flex
        items-center
      "
    >
      <span class="mx-auto">{{
        `${Math.round((((progress - min) * 100) / (max - min)) * 100) / 100}%`
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    min: {
      type: Number,
      default() {
        return 0
      },
    },
    max: {
      type: Number,
      default() {
        return 100
      },
    },
    progress: {
      type: Number,
      default() {
        return 1
      },
    },
    showPercentage: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>