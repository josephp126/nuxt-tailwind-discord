<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 19L21.4286 29L18 25" stroke="#E1EBFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></template>
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

