<template>
  <div class = "w-full">
    <SVGAward v-if="name.toLowerCase() == 'award'" :size="size" />
    <SVGBar v-if="name.toLowerCase() == 'bar'" :size="size" />
    <SVGBars v-if="name.toLowerCase() == 'bars'" :size="size" />
    <SVGBell v-if="name.toLowerCase() == 'bell'" :size="size" />
    <SVGBook v-if="name.toLowerCase() == 'book'" :size="size" />
    <SVGCheckCircle v-if="name.toLowerCase() == 'checkcircle'" :size="size" />
    <SVGCircle v-if="name.toLowerCase() == 'circle'" :size="size" />
    <SVGContact v-if="name.toLowerCase() == 'contact'" :size="size" />
    <SVGCross v-if="name.toLowerCase() == 'cross'" :size="size" />
    <SVGCrossCircle v-if="name.toLowerCase() == 'crosscircle'" :size="size" />
    <SVGCrosshair v-if="name.toLowerCase() == 'crosshair'" :size="size" />
    <SVGDollarSign v-if="name.toLowerCase() == 'dollarsign'" :size="size" />
    <SVGEdit v-if="name.toLowerCase() == 'edit'" :size="size" />
    <SVGFile v-if="name.toLowerCase() == 'file'" :size="size" />
    <SVGFriends v-if="name.toLowerCase() == 'friends'" :size="size" />
    <SVGGift v-if="name.toLowerCase() == 'gift'" :size="size" />
    <SVGGrid v-if="name.toLowerCase() == 'grid'" :size="size" />
    <SVGHash v-if="name.toLowerCase() == 'hash'" :size="size" />
    <SVGHelpCircle v-if="name.toLowerCase() == 'helpcircle'" :size="size" />
    <SVGHome v-if="name.toLowerCase() == 'home'" :size="size" />
    <SVGMessage v-if="name.toLowerCase() == 'message'" :size="size" />
    <SVGMessageCircle
      v-if="name.toLowerCase() == 'messagecircle'"
      :size="size"
    />
    <SVGMessageSquare
      v-if="name.toLowerCase() == 'messagesquare'"
      :size="size"
    />
    <SVGMoon v-if="name.toLowerCase() == 'moon'" :size="size" />
    <SVGNotStonks v-if="name.toLowerCase() == 'notstonks'" :size="size" />
    <SVGPaperclip v-if="name.toLowerCase() == 'paperclip'" :size="size" />
    <SVGPlusCircle v-if="name.toLowerCase() == 'pluscircle'" :size="size" />
    <SVGPlus v-if="name.toLowerCase() == 'plus'" :size="size" />
    <SVGServer v-if="name.toLowerCase() == 'server'" :size="size" />
    <SVGSettings v-if="name.toLowerCase() == 'settings'" :size="size" />
    <SVGShield v-if="name.toLowerCase() == 'shield'" :size="size" />
    <SVGSliders v-if="name.toLowerCase() == 'sliders'" :size="size" />
    <SVGStonks v-if="name.toLowerCase() == 'stonks'" :size="size" />
    <SVGStopCircle v-if="name.toLowerCase() == 'stopcircle'" :size="size" />
    <SVGTag v-if="name.toLowerCase() == 'tag'" :size="size" />
    <SVGZap v-if="name.toLowerCase() == 'zap'" :size="size" />
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
      },
    },
  },
}
</script>