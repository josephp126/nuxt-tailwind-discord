<template>
  <div class="p-4">
    <div
      :class="`
        font-montserrat cursor-default
        hover:${name == 'Premium' ? 'bg-featureHoverPrem' : 'bg-featureHover'}
        hover:bg-purple-900
        border-gray-700 border-2
        transform
        transition-all group
        duration-500
        ease-in-out
        hover:-translate-y-1
        block
        py-2 px-3
        w-full
        h-48
        lg:w-72
        rounded-xl
         ${name == 'Premium' ? 'hover:text-black' : ''}
       `"
    >
      <img
        v-if="name == 'Premium'"
        src="/img/featureoverprem.png"
        class="
          hidden
          group-hover:block
          w-full
          h-full
          absolute
          object-cover
          inset-0
          bg-black bg-opacity-10
          z-20
        "
      />
      <img
        v-else
        src="/img/featureover.png"
        class="
          hidden
          group-hover:block
          w-full
          h-full
          absolute
          object-cover
          inset-0
          bg-black bg-opacity-10
          z-20
        "
      />
      <div class="flex flex-col justify-start w-full h-full">
        <div
          class="
            text-lg relative
            p-2
            font-quicksand font-semibold
            flex flex-row
            items-center
            justify-between
            w-full
          "
        >
          <span class="rounded-full pr-2 text-yellow-500">
            <SVGNewWrapper :name="svg" />
          </span>
          <span class="w-full">{{ name }}</span>
          <NuxtLink
            :to="route"
            :class="`absolute z-30 right-0 py-3 px-4 cursor-pointer rounded-xl text-sm font-medium group-hover:${
              name == 'Premium' ? 'bg-featureprembbg' : 'bg-button'
            } group-hover:shadow-xl group-hover:${
              name == 'Premium' ? 'text-black' : 'text-white'
            } bg-none ${
              /* name == 'Premium' ? 'bg-yellow-300 text-black' : */ 'bg-gray-600'
            } group-hover:bg-transparent transition duration-500 ease-in-out`"
            >Go</NuxtLink
          >
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
      default: null,
    },
  },
}
</script>