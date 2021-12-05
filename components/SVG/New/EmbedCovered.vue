<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.8887 5.51391C27.2858 4.7578 30.4194 4.60469 32.1441 6.68095C33.9801 8.89115 31.4901 13.3977 33.2987 15.6381C36.0095 18.996 42.9748 16.8102 43.9284 21.2782C44.7569 25.1606 38.1661 25.5954 36.1082 28.8025C34.3989 31.4664 35.212 35.638 33.1995 37.9989C31.0558 40.5138 27.9237 42.2754 24.8887 41.9644C21.8776 41.6559 20.1002 37.9177 17.3834 36.3783C14.3955 34.6854 10.188 35.559 8.16912 32.491C6.17565 29.4617 7.30395 25.0876 7.44684 21.2782C7.58424 17.6152 6.46901 12.8226 8.98965 10.6157C11.863 8.10002 16.1318 11.7507 19.6 10.6378C21.8511 9.91544 22.6349 6.22483 24.8887 5.51391Z" fill="#6592FF" fill-opacity="0.18"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7283 7.52284C30.0243 6.10077 35.9857 3.32096 39.1279 6.37851C42.7307 9.88426 38.5611 15.8367 39.2032 20.6346C39.5471 23.2051 42.0915 25.2343 41.9975 27.8229C41.9043 30.3851 40.4051 32.7222 38.6906 34.7377C37.113 36.5922 34.8998 37.7912 32.6179 38.8488C30.4389 39.8589 28.1128 40.2771 25.7283 40.7458C22.7722 41.3269 19.9126 42.2508 16.9095 41.9364C12.8728 41.5138 7.37194 41.9464 5.47795 38.6257C3.55377 35.2519 8.86993 31.6364 8.85994 27.8229C8.84992 23.9946 3.48517 20.3745 5.42129 16.9899C7.32757 13.6574 13.2798 15.4272 16.9219 13.7293C20.2752 12.166 22.1925 8.69329 25.7283 7.52284Z" fill="#6592FF" fill-opacity="0.18"/>
<g filter="url(#filter0_di_124_427)">
<path d="M34.6501 13.06C35.075 13.4849 34.9281 14.4817 34.6501 15.1846C33.8652 17.6693 32.2463 22.2627 30.9491 25.5429C29.8372 28.3545 28.1313 32.0434 26.9595 34.6317C26.8668 34.866 26.6924 35.182 26.5289 35.3455C26.202 35.6724 25.6516 35.9395 25.1939 35.9722C24.4311 36.0268 23.8536 35.6128 23.5214 34.9536L20.847 28.8461C20.6454 28.4811 20.8308 28.0125 21.1577 27.6856L25.2447 23.5986C25.5717 23.2716 25.6862 22.7322 25.3321 22.3781C24.978 22.024 24.5203 22.0567 24.1116 22.4654L20.0246 26.5524C19.6976 26.8794 19.1582 26.9939 18.7932 26.7923L12.6857 24.1179C12.0973 23.8565 11.6833 23.279 11.8196 22.4345C11.8742 21.6716 12.3756 21.0286 13.0785 20.7507C15.1981 19.7642 19.2739 17.9547 22.1672 16.761C25.4475 15.4638 30.1116 13.9158 32.5255 13.06C33.2284 12.782 34.2252 12.6351 34.6501 13.06Z" fill="url(#paint0_linear_124_427)"/>
</g>
<defs>
<filter id="filter0_di_124_427" x="4.79352" y="8.79359" width="37.123" height="37.1835" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.3475 0 0 0 0 0.533339 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_124_427"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_124_427" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_124_427"/>
</filter>
<linearGradient id="paint0_linear_124_427" x1="24.5" y1="7.5" x2="24.5" y2="40" gradientUnits="userSpaceOnUse">
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

