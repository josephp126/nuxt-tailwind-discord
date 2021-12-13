<template>
  <div class="w-full mx-auto">
    <div class="flex flex-col items-start justify-start space-y-8 w-full">
      <div class="py-2 w-full">
        <div class="py-2 w-full">
          <div class="p-4 flex flex-col items-start space-y-1">
            <span
              class="
                text-2xl
                bg-navCurrent
                text-transparent
                bg-clip-text
                font-bold font-montserrat
              "
              >Applications</span
            >
            <span class="text-sm"
              >Manage the applications here!</span
            >
          </div>
        </div>
        <div
          class="
            flex flex-col
            w-full
            space-y-8
            items-stretch
            justify-start
          "
        >
          <div v-for = "app in apps" :key = "app.ident" class="py-2 flex flex-col w-full">
            <PageAppsApp :title = "app.name" :content = "app" />
          </div>
        </div>
      </div>
            <hr class="border-discortics-header w-full" />

            <div class="py-2 w-full">
        <div class="py-2 w-full">
          <div class="p-4 flex flex-col items-start space-y-1">
            <span
              class="
                text-2xl
                bg-navCurrent
                text-transparent
                bg-clip-text
                font-bold font-montserrat
              "
              >Applications</span
            >
            <span class="text-sm"
              >Manage the applications here!</span
            >
          </div>
        </div>
        <div
          class="
            flex flex-col
            w-full
            space-y-8
            items-stretch
            justify-start
          "
        >
          <div v-for = "app in apps" :key = "app.ident" class="py-2 flex flex-col w-full">
            <PageAppsApp :title = "app.name" :content = "app" />
          </div>
        </div>
      </div>
      <hr class="border-discortics-header w-full" />
    </div>
  </div>
</template>

<script>


export default {
    async asyncData({ $api, $_ }) {

const token = localStorage.getItem('sessionToken')
    let apps = await $api.$request({
      url: `v2/application/${localStorage.getItem('guildID')}`,
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
    })
    apps = apps.data;
    const appsx = Object.keys(apps)
    const appsy = Object.values(apps)
    for(let i = 0; i < appsy.length; ++i) {
      appsy[i].ident = appsx[i]
    }
    const roles = await $api.$request({
      url: `v2/roles/${localStorage.getItem('guildID')}`,
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
    })
    const channels = await $api.$request({
      url: `v2/channels/${localStorage.getItem('guildID')}`,
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
    })
    return {
      apps: appsy,
      roles: roles.data,
      channels: channels.data,
    }
  },
  layout: 'dashboard',
}
</script>
