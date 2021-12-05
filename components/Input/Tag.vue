<template>
  <div
    class="
      bg-discortics-dashboard
      py-2
      rounded-md
      lg:max-h-24
      lg:h-20
      flex
      items-center
      w-full
    "
  >
  <div class = "absolute top-50 left-50" v-bind:class = "{hidden: !editing}">
<InputTagEditor />
  </div>
    <div
      class="
        p-4
        flex flex-col
        lg:flex-row
        items-center
        justify-between
        mx-auto
        w-full
      "
    >
      <div class="p-4 group relative w-full">
        <input
        v-model="tagName"
          class="
            bg-discortics-quote
            border-gray-500
            p-2
            border
            rounded-md
            w-full
            h-12
          "
          maxlength="10"
        />
      </div>
      <div class="p-2 flex flex-row items-center">
        <div class="p-px">
          <button
          @click="x => editing = true"
            class="
              p-2
              bg-yellow-500
              rounded-md
              block
              transition
              duration-500
              ease-in-out
              transform
              hover:translate-y-1
            "
          >
            <SVGEdit size="20"/>
          </button>
        </div>
        <div class="p-px">
          <button
            class="
              p-2
              bg-red-500
              rounded-md
              block
              transition
              duration-500
              ease-in-out
              transform
              hover:translate-y-1
            "
          >
            <SVGCrossCircle size="20" /> 
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            tagName: this.name,
            editing: false
        }
    }
}
</script>