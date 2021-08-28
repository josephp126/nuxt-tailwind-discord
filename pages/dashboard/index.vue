<template>
  <div id="content" class="main-content pt-10">
    <div class="layout-px-spacing">
      <div class="layout-top-spacing">
        <div class="layout-spacing">
          <div class="bg-discortics-dashboard rounded-md">
            <div class="border-b border-dashed border-gray-500">
              <div class="p-4">
                <p class="text-lg">
                  Your Servers {{ typeof $auth.$storage.getState('connected') }}
                </p>
              </div>
            </div>

            <div id="servers" class="widget-content">
              <div
                class="spinner-grow text-secondary align-self-center loader-lg"
              ></div>
              <div class="flex flex-wrap justify-center">
                <CardsServers
                  v-for="stuff in servers"
                  :key="stuff.name"
                  :name="stuff.name"
                />
              </div>
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
  /*
async asyncData(context) {
    console.log('eee')
    console.log(context.$auth.loggedIn)

if (context.$auth.loggedIn) {
             console.log("check")
      await context.$auth.$storage.setState('connected', false)

      if (!context.$auth.$storage.getState('connected')) {
        const result = await context.$api.post('/signin', {
          token: context.$auth.strategy.token.get(),
        })
        console.log(result.data)
        context.$auth.$storage.setState('connected', result)
      }
    } else if (context.$auth.$storage.getState('connected')) {
        console.log("yee")
      await context.$auth.$storage.setState('connected', false)
    }
    
    
  },
  */
  data() {
    return {
      servers: new Array(45).fill(1),
    }
  },
}
</script>