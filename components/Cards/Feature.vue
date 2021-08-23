<template>
  <div class="p-4">
    <div
      class="
        bg-discortics-500
        border-discortics-quote border
        block
        p-4
        w-full
        h-48
        md:w-52
        rounded-md
      "
    >
      <div class="flex flex-col justify-between">
        <div class="text-xl p-2 font-bold">
            <span>{{ name }}</span>
        </div>

        <p class="text-sm p-2">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    svg: {
      type: String,
      default: null,
    },
  },
}
</script>