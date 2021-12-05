<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8589 5.1546C25.0173 5.86877 26.5254 10.5239 29.8677 12.885C33.0393 15.1256 37.6214 15.5059 39.83 18.5567C42.3805 22.0797 43.6042 26.4823 42.7077 30.6209C41.7525 35.0311 39.4396 40.0374 34.8275 41.6517C30.2177 43.2651 25.7662 38.7788 20.8589 38.2681C16.8362 37.8494 12.2569 41.197 9.03441 38.9673C5.80062 36.7297 7.12662 32.0466 6.57576 28.3849C6.13898 25.4816 5.78596 22.7287 6.15352 19.8174C6.61768 16.1412 6.24378 12.0325 8.98552 9.29866C11.9141 6.37851 16.5888 4.42125 20.8589 5.1546Z" fill="#6592FF" fill-opacity="0.18"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0098 8.04417C28.5001 7.4423 33.3995 3.33688 37.0496 5.75649C40.71 8.18303 37.4019 13.663 38.4693 17.6294C39.4047 21.1049 43.8546 23.8654 42.8545 27.3263C41.8557 30.7829 36.7823 31.541 33.7732 33.8815C30.3394 36.5523 28.5386 42.347 24.0098 41.9837C19.3485 41.6097 18.2495 35.7638 15.439 32.4106C13.6084 30.2266 11.8676 28.2035 10.4376 25.7912C8.65412 22.7825 5.46242 19.9802 6.07756 16.6183C6.70668 13.1799 10.096 10.5498 13.5265 8.90952C16.7002 7.39203 20.4521 8.52104 24.0098 8.04417Z" fill="#6592FF" fill-opacity="0.18"/>
<g filter="url(#filter0_di_124_424)">
<path d="M19.7143 29.102V31.1429C19.7143 32.6735 18.4898 34 16.8571 34C15.2245 34 14 32.6735 14 31.1429V29.102C14 27.5714 15.2245 26.2449 16.8571 26.2449C18.4898 26.2449 19.7143 27.5714 19.7143 29.102Z" fill="url(#paint0_linear_124_424)"/>
<path d="M26.8571 22.9796V31.1429C26.8571 32.6735 25.6327 34 24 34C22.3673 34 21.1429 32.6735 21.1429 31.1429V22.9796C21.1429 21.449 22.3673 20.1224 24 20.1224C25.6327 20.1224 26.8571 21.449 26.8571 22.9796Z" fill="url(#paint1_linear_124_424)"/>
<path d="M34 16.8571V31.1429C34 32.6735 32.7755 34 31.1429 34C29.5102 34 28.2857 32.7755 28.2857 31.1429V16.8571C28.2857 15.3265 29.5102 14 31.1429 14C32.7755 14 34 15.3265 34 16.8571Z" fill="url(#paint2_linear_124_424)"/>
</g>
<defs>
<filter id="filter0_di_124_424" x="7" y="10" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.3475 0 0 0 0 0.533339 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_124_424"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_124_424" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_124_424"/>
</filter>
<linearGradient id="paint0_linear_124_424" x1="24" y1="11" x2="24" y2="36.6667" gradientUnits="userSpaceOnUse">
<stop stop-color="#EDF3FF"/>
<stop offset="1" stop-color="#4A7CFF"/>
</linearGradient>
<linearGradient id="paint1_linear_124_424" x1="24" y1="11" x2="24" y2="36.6667" gradientUnits="userSpaceOnUse">
<stop stop-color="#EDF3FF"/>
<stop offset="1" stop-color="#4A7CFF"/>
</linearGradient>
<linearGradient id="paint2_linear_124_424" x1="24" y1="11" x2="24" y2="36.6667" gradientUnits="userSpaceOnUse">
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

