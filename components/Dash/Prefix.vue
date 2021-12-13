<template>
    <div class="py-1 lg:py-4 px-4">
      <div class="mx-auto max-w-xl form-card w-full lg:w-112 relative lg:h-64 overflow-hidden">
        <div class="px-8">
          <div class="gradient-circle w-24 h-24 absolute right-2 top-2" />
          <div class="pt-2">
            <div class="py-2">
              <p class="text-2xl pt-2 pb-1 font-semibold font-montserrat">Prefix</p>
              <p class="text-sm pt-1 pb-2">
                Change the prefix used to trigger the bot commands.
              </p>
            </div>
          </div>
          <div class="py-2 flex flex-col lg:flex-row items-center mx-auto">
            <div v-if="$fetchState.pending" class="group relative">
              <div
              class="border-gray-500 border-opacity-80 bg-transparent h-12 w-72 border-2 p-2 rounded-md"
            ><div class="h-full my-auto bg-gray-600 rounded animate-pulse"></div></div>
            </div>
            <div v-else class="group relative">
              <input
                v-model="prefix"
                class="
                  border-gray-500 border-opacity-80 hover:border-selectorhighlight active:border-selectorhighlight
                  bg-transparent
                  p-2
                  border-2
                  rounded-md
                  w-72
                  h-12
                "
                @input="prefixCheck"
                maxlength="10"
              />
              <div v-if="inputValid" class="font-quicksand pt-2">
                <vs-alert variant="error" no-bg >
                  <span>The prefix cannot be <b>blank</b>!</span>
                </vs-alert>
              </div>
            </div>
          </div>
          <div
            v-if="$fetchState.pending"
            class="
              flex flex-row flex-wrap
              justify-start
              space-x-2
              py-2
              text-gray-300
              pointer-events-none
            "
          >
            <div class="h-8 py-3 flex flex-row items-center">
              <div class="h-8 w-24 exampleText text-xs rounded"><div class="animate-pulse m-2 p-2 h-2 bg-gray-600 rounded"></div></div>
            </div>
            <div class="h-8 py-3 flex flex-row items-center">
              <div class="h-8 w-24 exampleText text-xs rounded"><div class="animate-pulse m-2 p-2 h-2 bg-gray-600 rounded"></div></div>
            </div>
            <div class="h-8 py-3 flex flex-row items-center">
              <div class="h-8 w-24 exampleText text-xs rounded"><div class="animate-pulse m-2 p-2 h-2 bg-gray-600 rounded"></div></div>
            </div>
          </div>
          <div
            v-else
            class="
              flex flex-row flex-wrap
              justify-start
              space-x-2
              py-2
              text-gray-300
              pointer-events-none
            "
          >
            <div class="h-8 py-3 flex flex-row items-center">
              <span class="exampleText text-xs p-2">{{ prefix }}help</span>
            </div>
            <div class="h-8 py-3 flex flex-row items-center">
              <span class="exampleText text-xs p-2">{{ prefix }}ban</span>
            </div>
            <div class="h-8 py-3 flex flex-row items-center">
              <span class="exampleText text-xs p-2">{{ prefix }}blush</span>
            </div>
          </div>
        </div>
      </div></div>
</template>

<script>
export default {
  data() {
    return {
      prefix: ';',
      oldPrefix: ';'
    }
  },
  async fetch() {
    const token = localStorage.getItem('sessionToken')
    const response = await this.$api.request({
      url: `/v2/prefix/${localStorage.getItem('guildID')}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    let prefix = ';';
    if (response.status === 200) prefix = response.data.prefix;

    this.prefix = prefix;
    this.oldPrefix = prefix;
    
  },
   computed:{
    inputValid(){
      if(this.prefix){
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    prefixCheck() {
      this.$emit("prefixChange",true);
    },
    async updatePrefix() {
      if(this.oldPrefix !== this.prefix){
        const prefix = this.prefix;
        const response = await this.$api.request({
          url: `/v2/prefix/${localStorage.getItem('guildID')}`,
          method: 'post',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
          },
          data: {
            prefix,
          },
        })
        if (response.status === 200){
          this.oldPrefix = this.prefix;
        }
      }
    },
  },
}
</script>
<style scoped>
.vs-alert--no-bg.vs-alert-error {
  color: #ff7682;
}
</style>