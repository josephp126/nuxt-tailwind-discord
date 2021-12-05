<template>
  <div class="p-4">
    <div
      class="
        font-montserrat cursor-default
        hover:bg-featureHover
        hover:bg-purple-400
        border-discortics-header border
        transform
        transition group
        duration-500
        ease-in-out
        hover:translate-y-1
        block
        p-4
        w-full
        h-56
        lg:w-72
        rounded-xl
      "
    >
      <div class="flex flex-col justify-start w-full h-full">
        <div class="text-xl p-2 font-semibold flex flex-row items-center justify-between w-full">
          <span class="rounded-full pr-2 text-yellow-500">
            <SVGNewWrapper :name="svg" />
          </span>
          <span class = "w-full">{{ name }}</span>
          <NuxtLink :to = "route" class = "p-3 cursor-pointer rounded-xl text-sm font-medium group-hover:bg-button bg-none bg-gray-600 transition duration-500 ease-in-out">Go</NuxtLink>
        </div>

        <p class="text-sm p-2 font-quicksand">
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
    route: {
      type: String,
      default: null
    }
  },
}
</script>