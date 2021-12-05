<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#8BADFF" fill-opacity="0.18"/>
<g filter="url(#filter0_di_118_78)">
<path d="M19.7143 29.102V31.1429C19.7143 32.6735 18.4898 34 16.8571 34C15.2245 34 14 32.6735 14 31.1429V29.102C14 27.5714 15.2245 26.2449 16.8571 26.2449C18.4898 26.2449 19.7143 27.5714 19.7143 29.102Z" fill="#8BADFF"/>
<path d="M26.8571 22.9796V31.1429C26.8571 32.6735 25.6327 34 24 34C22.3673 34 21.1429 32.6735 21.1429 31.1429V22.9796C21.1429 21.449 22.3673 20.1224 24 20.1224C25.6327 20.1224 26.8571 21.449 26.8571 22.9796Z" fill="#8BADFF"/>
<path d="M34 16.8571V31.1429C34 32.6735 32.7755 34 31.1429 34C29.5102 34 28.2857 32.7755 28.2857 31.1429V16.8571C28.2857 15.3265 29.5102 14 31.1429 14C32.7755 14 34 15.3265 34 16.8571Z" fill="#8BADFF"/>
</g>
<defs>
<filter id="filter0_di_118_78" x="7" y="10" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.3475 0 0 0 0 0.533339 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_118_78"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_118_78" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_118_78"/>
</filter>
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

