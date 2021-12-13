<template>
  <div class="py-1 lg:py-8 px-4 w-full relative max-w-7xl">
    <div
      class="
        max-w-7xl
        form-card
        w-full
        relative
        lg:h-32
        overflow-hidden
        flex flex-col
        justify-center
      "
    >
      <div class="px-8">
        <div class="gradient-circle w-24 h-24 absolute right-24 top-2" />
        <div class="pt-2 flex flex-row justify-between">
          <div class="py-2 flex flex-col justify-center">
            <p class="text-2xl pt-2 pb-1 font-semibold font-montserrat">
              {{ title || `Form ${content.ident.substring(4, 5)}` }}
            </p>
            <p class="text-sm pt-1 pb-2">
              Contains
              {{
                content.questions.filter((x) => typeof x === 'string').length
              }}
              description and
              {{
                content.questions.filter((x) => typeof x !== 'string').length
              }}
              mcqs based questions
            </p>
          </div>
          <div class="flex flex-row items-center">
            <div class="p-2">
              <MiscToggle :enabled="content.open" />
            </div>
            <div class="p-2" @click="toggle">
              <button class="p-2 w-8 h-8 rounded-full bg-gray-600 text-white">
                <SVGEdit size="18" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="`${
        toggled ? 'max-h-screen' : 'max-h-0'
      } overflow-hidden transition-all flex flex-col items-start justify-start space-y-8 duration-500 ease-in-out -bottom-24 py-2`"
    >
      <div class="flex flex-row flex-wrap justify-between">
        <div class="py-1 lg:py-8">
          <div
            class="
              mx-auto
              max-w-xl
              form-card
              w-full
              lg:w-112
              relative
              lg:h-64
              overflow-hidden
            "
          >
            <div class="px-8">
              <div class="gradient-circle w-24 h-24 absolute right-2 top-2" />
              <div class="pt-2">
                <div class="py-2">
                  <p class="text-2xl pt-2 pb-1 font-semibold font-montserrat">
                    Accepted Role
                  </p>
                  <p class="text-sm pt-1 pb-2">
                    Do you want accept add role? Change it to a suitable one
                    below!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class = "flex flex-col items-stretch space-y-4 w-full">
        <div class = "text-2xl">Questions</div>
        <div v-for = "(question, index) in content.questions" :key = "content.questions.indexOf(question)" class = "relative rounded-xl h-12 w-full items-center bg-question flex flex-row justify-between">
          <div class = "flex flex-row p-2">
          <div class = "absolute left-0 top-0 bg-indigo-400 rounded-xl h-12 w-8 flex flex-row items-center justify-center"><span class = "text-xl">{{index}}</span></div>
          <div class = "ml-10 text-white">{{typeof question === "string" ? question : question.question}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    roles: {
      type: Array,
      default: null,
    },
    channels: {
      type: Array,
      default: null,
    },
    content: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      toggled: false,
    }
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled
    },
    toggleOn() {
      this.toggled = true
    },
    toggleOff() {
      this.toggled = false
    },
    getState() {
      return this.toggled
    },
  },
}
</script>