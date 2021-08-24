<template>
  <div>
    <SVGAward v-if="name.toLowerCase() == 'award'" :size = "size" />
    <SVGBar v-if="name.toLowerCase() == 'bar'" :size = "size" />
    <SVGBars v-if="name.toLowerCase() == 'bars'" :size = "size" />
    <SVGBook v-if="name.toLowerCase() == 'book'" :size = "size" />
    <SVGCircle v-if="name.toLowerCase() == 'circle'" :size = "size" />
    <SVGCross v-if="name.toLowerCase() == 'cross'" :size = "size" />
    <SVGFile v-if="name.toLowerCase() == 'file'" :size = "size" />
    <SVGGrid v-if="name.toLowerCase() == 'grid'" :size = "size" />
    <SVGHelpCircle v-if="name.toLowerCase() == 'helpcircle'" :size = "size" />
    <SVGHome v-if="name.toLowerCase() == 'home'" :size = "size" />
    <SVGPaperclip v-if="name.toLowerCase() == 'paperclip'" :size = "size" />
    <SVGPlusCircle v-if="name.toLowerCase() == 'pluscircle'" :size = "size" />
    <SVGServer v-if="name.toLowerCase() == 'server'" :size = "size" />
    <SVGSettings v-if="name.toLowerCase() == 'settings'" :size = "size" />
    <SVGSliders v-if="name.toLowerCase() == 'sliders'" :size = "size" />
    <SVGTag v-if="name.toLowerCase() == 'tag'" :size = "size" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default() {
        return '24'
      }
    }
  },
}
</script>