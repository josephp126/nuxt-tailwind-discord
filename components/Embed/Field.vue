<template>
  <div class="flex flex-col items-center w-full">
    <div
      class="border-maid-border border-opacity-50 border 
        flex flex-col
        lg:flex-row
        justify-between
        items-center
        space-y-4
        w-full
        lg:space-x-4 lg:space-y-0
      "
    >
      <div class="flex flex-col items-center w-full">
        <label for="field_name" class="font-semibold p-2">Name</label>
        <input
          @input="handleInput"
          id="field_name"
          v-model="name"
          class="
            bg-discortics-quote
            border-gray-500
            p-2
            border
            rounded-md
            w-full
            h-12
          "
          maxlength="256"
        />
      </div>
      <div class="flex flex-col items-center w-full">
        <label for="field_value" class="font-semibold p-2">Value</label>
        <textarea
          @input="handleInput"
          id="field_value"
          v-model="cvalue"
          class="
            bg-discortics-quote
            border-gray-500
            p-2
            border
            rounded-md
            w-full
            h-12
          "
          maxlength="1024"
        />
      </div>
      <div class="flex flex-col block items-center justify-start">
        <label for="field_inline" class="font-semibold p-2">Inline</label>
        <input
          @input="handleInput"
          id="field_inline"
          v-model="inline"
          type="checkbox"
          class="
            bg-discortics-quote
            border-gray-500
            p-2
            border
            rounded-full
            w-12
            h-12
            appearance-none
            checked:bg-discortics-link
          "
          maxlength="1024"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      default() {
        return {
          name: '',
          value: '',
          inline: false,
        }
      },
    },
  },
  data() {
    const valueName = this.value
    return {
      name: valueName.name,
      cvalue: valueName.cvalue,
      inline: valueName.inline,
    }
  },
  methods: {
    handleInput() {
      this.$emit('input', {
        name: this.name,
        value: this.cvalue,
        inline: this.inline,
      })
    },
  },
}
</script>