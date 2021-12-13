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
        feather feather-log-out
        h-full
      "
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
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


