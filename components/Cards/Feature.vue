<template>
  <div class="p-4">
    <div
      class="
        bg-discortics-500
        border-discortics-quote border
        transform
        transition
        duration-200
        ease-in-out
        hover:translate-y-1
        hover:scale-110
        block
        p-4
        w-full
        h-48
        lg:w-52
        rounded-md
      "
    >
      <div class="flex flex-col justify-start w-full h-full">
        <div class="text-xl p-2 font-bold flex flex-row items-stretch justify-between w-full">
          <span class = "w-full">{{ name }}</span>
          <span class="rounded-full pl-2 text-yellow-500">
            <SVGWrapper :name="svg" />
          </span>
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