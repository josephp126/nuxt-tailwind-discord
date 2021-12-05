<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6116 33.6079C17.5256 32.884 15.116 30.4744 14.3921 27.3884C13.8693 25.1597 13.8693 22.8403 14.3921 20.6116C15.116 17.5256 17.5256 15.116 20.6116 14.3921C22.8403 13.8693 25.1597 13.8693 27.3884 14.3921C30.4744 15.116 32.884 17.5256 33.6079 20.6116C34.1307 22.8403 34.1307 25.1597 33.6079 27.3884C32.884 30.4744 30.4744 32.884 27.3884 33.6079C25.1597 34.1307 22.8403 34.1307 20.6116 33.6079Z" fill="#E1EBFF" stroke="#E1EBFF" stroke-width="1.5"/>
<circle cx="24" cy="28" r="1" fill="#1F1D2B"/>
<path d="M22 22V21C22 19.8954 22.8954 19 24 19V19V19C25.1046 19 26 19.8954 26 21V21.6431C26 22.2614 25.7832 22.8601 25.3874 23.3351L24 25" stroke="#1F1D2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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

