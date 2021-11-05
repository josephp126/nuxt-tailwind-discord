<template>
  <div class="max-w-6xl mx-auto">
    <div class="py-8 px-4">
      <div class="mx-auto max-w-xl form-card relative md:h-48 overflow-hidden">
        <div class = "px-8">
        <div class="gradient-circle w-24 h-24 absolute right-2 top-2" />
        <div>
          <div class="p-4">
            <p class="text-xl py-1 font-semibold">Prefix</p>
            <p class="text-sm py-1">
              Change the prefix used to trigger the bot commands.
            </p>
          </div>
        </div>
        <div class="py-2 flex flex-col md:flex-row items-center mx-auto">
          <div class="group relative">
            <input
              v-model="prefix"
              class="
                border-gray-500 border-opacity-80
                bg-transparent
                p-2
                border-2
                rounded-md
                w-72
                h-12
              "
              maxlength="10"
            />
          </div>
          <!--
          <div class="p-4">
            <button
              @click="updatePrefix"
              class="
                p-2
                bg-discortics-link
                rounded-md
                block
                transition
                duration-500
                ease-in-out
                transform
                hover:translate-y-1
              "
              :disabled="prefix.length >= 10"
            >
              Update Prefix
            </button>
          </div>
          <div
            :class="`text-sm ${
              prefix.length < 10
                ? 'text-gray-300'
                : 'text-red-300 animate-pulse'
            }`"
          >
            Prefix can be a maximum of 10 characters.
          </div>
          -->
        </div>
        <div class="flex flex-row flex-wrap justify-start space-x-2">
          <div class="exampleText px-2">
            <span class="text-sm p-2">{{ prefix }}help</span>
          </div>
          <div class="exampleText px-2">
            <span class="text-sm p-2">{{ prefix }}ban</span>
          </div>
          <div class="exampleText px-2">
            <span class="text-sm p-2">{{ prefix }}blush</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  methods: {
    async updatePrefix() {
      const prefix = this.prefix
      const response = await this.$api.request({
        url: `/prefix?id=${localStorage.getItem('guildID')}`,
        method: 'post',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
        },
        data: {
          prefix,
        },
      })
      if (response.status === 200)
        this.$toast.success('Successfully updated prefix!', { duration: 10000 })
    },
  },
  async asyncData(ctx) {
    localStorage.setItem('guildID', '708944530413453393')
    const token = localStorage.getItem('sessionToken')
    const response = await ctx.$api.request({
      url: `/prefix?id=${localStorage.getItem('guildID')}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    let prefix = ''
    if (response.status === 200) prefix = response.data.prefix
    let resp = await ctx.$api.request({
      url: `/membercount?id=${localStorage.getItem('guildID')}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    resp = resp.data

    return {
      prefix,
      resp,
    }
  },
}
</script>