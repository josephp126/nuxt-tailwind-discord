<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.2636 10.3863C21.8459 9.67354 18.6433 4.47849 15.7467 6.43951C12.7377 8.47662 16.6197 13.831 15.2075 17.1943C14.0629 19.9202 10.0441 20.3727 8.77509 23.0421C7.26393 26.2208 6.37424 30.0294 7.52326 33.3583C8.7069 36.7876 11.3708 40.8391 14.9721 40.996C19.154 41.1783 21.1759 35.0391 25.2636 34.1313C28.059 33.5105 30.5919 38.0585 33.2307 36.9411C35.7432 35.8773 35.1008 31.9249 36.2983 29.4589C37.3945 27.2012 40.2686 25.5384 39.9797 23.0421C39.684 20.4867 36.1511 19.6811 34.9067 17.4344C33.6339 15.1363 34.8627 11.5306 32.748 9.98509C30.6909 8.48156 27.7524 10.9053 25.2636 10.3863Z" fill="#6592FF" fill-opacity="0.18"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.1306 7.00001C30.34 7.00665 29.7185 12.9608 32.3028 14.8442C34.4416 16.403 38.048 14.5658 39.9827 16.3668C41.8715 18.1249 42.2894 21.1854 41.8277 23.7106C41.382 26.1483 38.3553 27.319 37.5513 29.665C36.4526 32.8708 38.8275 37.2075 36.3887 39.581C34.1495 41.7603 29.9879 41.0967 27.1306 39.807C24.4243 38.5854 24.5304 33.9626 21.7319 32.9652C17.9133 31.6042 13.2241 35.752 9.78189 33.6238C6.77322 31.7636 4.85446 26.6699 6.76348 23.7106C9.17208 19.9769 15.2746 21.3925 19.127 19.1373C20.6423 18.2503 20.9837 16.2819 21.9459 14.8228C23.6978 12.166 23.925 6.99337 27.1306 7.00001Z" fill="#6592FF" fill-opacity="0.18"/>
<g filter="url(#filter0_di_138_127)">
<path d="M35 14V13H34C33 13 31.6497 13 31.203 13H26.736C25.9543 13 25.1726 13.335 24.6142 13.8934L13.8934 24.6142C13.335 25.1726 13 25.9543 13 26.736C13 27.5178 13.335 28.2995 13.8934 28.9695L19.0305 34.1066C19.5888 34.665 20.3706 35 21.264 35C22.0457 35 22.8274 34.665 23.3858 34.1066L34.1066 23.3858C34.665 22.8274 35 22.0457 35 21.264V16.797C34.8883 16.1269 35 15 35 14ZM28.6406 21C27.1406 21 27.1406 21 27.1406 19.5C27.1406 18 27.1406 18 28.6406 18C30.1406 18 30.1406 18 30.1406 19.5C30.1406 21 30.1406 21 28.6406 21Z" fill="url(#paint0_linear_138_127)"/>
</g>
<defs>
<filter id="filter0_di_138_127" x="6" y="9" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.3475 0 0 0 0 0.533339 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_127"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_127" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_127"/>
</filter>
<linearGradient id="paint0_linear_138_127" x1="24" y1="9.7" x2="24" y2="37.9333" gradientUnits="userSpaceOnUse">
<stop stop-color="#EDF3FF"/>
<stop offset="1" stop-color="#4A7CFF"/>
</linearGradient>
</defs>
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

