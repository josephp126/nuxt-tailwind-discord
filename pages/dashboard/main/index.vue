<template>
  <div class="max-w-10xl w-full mx-auto">
    <div class="flex flex-col items-start justify-start space-y-8 w-full">
      <div class="py-2">
        <div class="py-2">
          <div class="p-4 flex flex-col items-start space-y-1">
            <span
              class="
                text-body27
                bg-navCurrent
                text-transparent
                bg-clip-text
                font-bold font-montserrat
              "
              >Let's Get Started!</span
            >
            <span class="text-sm"
              >Manage the most basic configuration to begin with the bot.</span
            >
          </div>
        </div>
        <div
          class="
            flex flex-col
            lg:flex-row lg:flex-wrap
            items-stretch
            justify-start
          "
        >
          <div class="py-2 flex flex-col">
            <DashPrefix ref = "prefix" @prefixChange="valueChanged" />
          </div>
          <div class="py-2 flex flex-col">
            <DashLanguage ref = "lang" @langChange="valueChanged" />
          </div>
        </div>
      </div>
      <hr class="border-discortics-header w-full" />
      <div class="mx-auto w-full" data-aos="fade-up">
        <div class="py-2">
          <div class="p-4 flex flex-col items-start space-y-1">
            <span
              class="
                text-body27
                bg-navCurrent
                text-transparent
                bg-clip-text
                font-bold font-montserrat
              "
              >Configurations</span
            >
            <span class="text-sm"
              >Confused where to proceed next? Let us explain all available
              modules.</span
            >
          </div>
        </div>
        <div
          class="
            mx-auto
            flex flex-col
            lg:flex-row lg:flex-wrap
            justify-start
            w-full
          "
        >
          <div v-for="feature in Features" :key="feature.name">
            <PageMainFeature
              :name="feature.name"
              :description="feature.description"
              :svg="feature.icon"
              :route="feature.route"
            />
          </div>
        </div>
      </div>
      <hr class="border-discortics-header w-full" />
      <div class="mx-auto w-full" data-aos="fade-up">
        <div
          class="
            mx-auto
            flex flex-col
            lg:flex-row lg:flex-wrap
            justify-start
            w-full
          "
        >
          <div v-for="feature in Features2" :key="feature.name">
            <PageMainFeature
              :name="feature.name"
              :description="feature.description"
              :svg="feature.icon"
              :route="feature.route"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Features from '@/data/FeaturesMain'
import Features2 from '@/data/FeaturesSub'

export default {
  layout: 'dashboard',
  data() {
    return {
      Features,
      Features2,
    }
  },
  methods: {
    valueChanged() {
      if((this.$refs.prefix.oldPrefix !== this.$refs.prefix.prefix) || (this.$refs.lang.selected.value !== this.$refs.lang.oldSelected.value)){
        if(!this.toastID){
          this.toastID = this.$vToastify.info({
            body: "Hold up! You have unsaved changes!",
            mode: "prompt",
            answers: {
              Reset: false,
              Save: true
            },
            canTimeout: false,
            draggable: false,
          });
          this.$vToastify.listen("vtPromptResponse", payload => {
              if(this.toastID && payload.id === this.toastID){
                delete this.toastID;
                const value = payload.response;
                if (value) {
                    this.$refs.prefix.updatePrefix();
                    this.$refs.lang.updateLang();
                }else{
                  this.$refs.prefix.prefix = this.$refs.prefix.oldPrefix;
                  this.$refs.lang.selected = this.$refs.lang.oldSelected;
                }
              }
          });
        }
        if(this.toastID && !this.$refs.prefix.prefix){
          this.$vToastify.removeToast(this.toastID);
          delete this.toastID;
        }
      }else if(this.toastID){
        this.$vToastify.removeToast(this.toastID);
        delete this.toastID;
      }
    },
  },
}
</script>