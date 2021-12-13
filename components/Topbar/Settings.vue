<template>
  <div id="profile" class="w-full flex flex-row justify-between space-x-4 items-center h-16 p-2">
    <div id="messages"> </div>
    <div id="notifications" class = "flex flex-row items-center"><SVGNewNotification /></div>
    <div
      id="profile"
      class="rounded-xl relative flex flex-row space-x-2 items-center justify-between"
    >
      <div class="flex flex-row h-full items-center justify-center">
        <img class="object-cover w-9 h-9 rounded-full" :src="'https://cdn.discordapp.com/avatars/' +
                          $auth.user.id +
                          '/' +
                          $auth.user.avatar +
                          '.webp'" alt="user icon" />
      </div>
      <div class="text-sm text-indigo-300 px-1 cursor-pointer" @click="toggleDrop">
        <span class = "text-white">Hi,</span> {{ $auth.user.username }}
      </div>
      <div class="text-gray-300 cursor-pointer" @click="toggleDrop"><SVGDown :class="`${dropOpen ? 'transform rotate-180 transition duration-500' : 'transition duration-500'}`" /></div>
      <div :class = "`${dropOpen ? 'block' : 'hidden'} absolute -bottom-28 flex flex-col divide-y divide-gray-600 p-2 rounded-xl w-48 right-0`" style="background: linear-gradient(102.94deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 232.2%); border: 1px solid #2F2F36;">
          <NuxtLink to = "/dashboard" id = "signout" class = "flex flex-row items-center py-2 justify-start"><SVGNewPreServers /> <span class = "px-1">Servers</span></NuxtLink>
          <div id = "signout" class = "flex flex-row items-center py-2 justify-start" @click = "$auth.logout"><SVGNewSignout /> <span class = "px-1">Sign Out</span></div>
      </div>
    </div>
    
  </div>
</template>
        <script>

export default {
  data() {
    return {
      dropOpen: false,
    }
  },
  methods: {
    toggleDrop() {
      this.dropOpen = !this.dropOpen
    },
    toggleOff() {
        this.dropOpen = false;
    },
  },
}
</script>