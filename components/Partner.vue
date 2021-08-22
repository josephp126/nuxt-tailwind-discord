<template>
  <div
    class="
      block
      w-full
      max-w-full
      lg:h-72
      h-full
      border-blue-300
      bg-opacity-40
      border border-opacity-25
      rounded-md
      p-8
      shadow-md
      bg-discortics-100
      transform
      transition
      duration-500
      ease-in-out
      hover:translate-y-1
      hover:bg-opacity-70
    "
  >
    <div class="text-discortics-200">
     <div v-html = "icon" />
    </div>
    <div class="py-2 tracking-wide">
      <h5 class="text-2xl font-semibold py-2">{{ title }}</h5>
      <p class="text-sm py-2">{{ description }}</p>
      <a class="text-discortics-200 py-2" href="{link}">{{linkname}}</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    linkname: {
      type: String,
      default: '',
    },
  },
}
</script>