<script>
import Constants from '@/data/Constants'
export default {
  head() {
    return {
      title: `${Constants.Name} - ToS`,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.title,
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Please read on to learn the rules and restrictions that govern your use of our website(s), products, services, proprietary bots, and other applications (the “Services”).',
        },
      ],
    }
  },
}
</script>

<template>
  <div
    class="
      flex flex-col
      min-h-screen
      font-quicksand
      tracking-wide
      bg-discortics-100
      text-white
    "
  >
    <main class="flex-1 w-full max-w-9xl p-4 mx-auto md:px-8 md:py-16 mt-5">
      <Nuxt />
    </main>
  </div>
</template>
