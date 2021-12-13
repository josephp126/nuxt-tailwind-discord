<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="
        px-1
        text-gray-500
        group-hover:text-white
        feather feather-user
        h-full
      "
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  </div>
</template>
<script>
export default {
props: {
size: {
type: String,
default() {return "24"}
}
},
}
</script>


