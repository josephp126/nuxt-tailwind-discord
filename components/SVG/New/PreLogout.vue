<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2561 32.3144L23.5976 33.067C24.325 33.7035 25.4306 33.6298 26.067 32.9024L33.067 24.9024C33.6443 24.2426 33.6443 23.2574 33.067 22.5976L26.067 14.5976C25.4306 13.8703 24.325 13.7966 23.5976 14.433C22.8703 15.0694 22.7965 16.175 23.433 16.9024L27.8934 22H15.75C14.7835 22 14 22.7835 14 23.75C14 24.7165 14.7835 25.5 15.75 25.5H27.8934L23.433 30.5976C22.7965 31.325 22.8703 32.4306 23.5976 33.067L24.2561 32.3144Z" fill="#FFE1E1" stroke="#FFE1E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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

