<template>
  <div class="px-8">
    <div class="flex flex-col justify-between pt-10">
      <div class="p-8 w-full h-full max-h-48">
        <div class="card bg-discortics-dashboard w-full rounded-lg h-full">
          <div class="flex flex-row p-4 justify-between">
            <div class="p-2">
              <img
                id="servericon"
                src="/img/user_icon.png"
                width="90"
                height="90"
                class="object-cover w-24 h-24 mx-auto"
                alt="..."
              />
            </div>
            <div class="user-info">
              <h5 class="card-user_name" id="servername">Server</h5>
              <p class="card-user_occupation">
                Members: {{ thisRoute }}
                <span id="servercount" class="badge badge-primary">--</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-8 w-full h-full max-h-48">
        <div class="flex flex-col md:flex-row bg-discortics-dashboard w-full rounded-lg h-full">
          <div class = "p-8">
          <div v-if="thisRoute == 'levels'">
            
          </div>
          </div>
        </div>
      </div>
    </div>
    <LayoutFab :NavList="NavList" />
  </div>
</template>
<script>
import NavList from '@/data/NavLeaderboard'
export default {
  layout: 'dashboard',
  data() {
    const availableRoutes = ['levels', 'economy', 'messages', 'invites']
    let routeName = 'levels'
    if(this.$route.params.routeName) routeName = this.$route.params.routeName.toLowerCase()
    if (!availableRoutes.includes(routeName.toLowerCase())) routeName = 'levels'
    return {
      NavList,
      thisRoute: routeName,
    }
  },
}
</script>