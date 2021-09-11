<template>
  <div class="md:px-8">
    <div class="flex flex-col justify-between pt-10">
      <div class="md:p-8 py-8 w-full h-full max-h-48">
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
                Members:
                <span id="servercount" class="badge badge-primary">--</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="md:p-8 py-8 w-full h-full">
        <div
          class="
            flex flex-col
            md:flex-row
            bg-discortics-dashboard
            w-full
            rounded-lg
          "
        >
          <div class="p-8 w-full">
            <div v-if="thisRoute == 'levels'">
              <div class="flex flex-col items-center space-y-4 w-full h-full">
                <CardsLevel />
                <CardsLevel />
                <CardsLevel />
                <CardsLevel />
                <CardsLevel />
                <CardsLevel />
                <CardsLevel />
                <CardsLevel />
              </div>
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
  async asyncData(context) {
    const routeName = null
    //    if(this.$route.params.routeName) routeName = this.$route.params.routeName.toLowerCase()
    //    if(!(/^(\d{17,19})$/.test(routeName))) routeName = null
    if (routeName) {
      const leaderboardData = await context.$axios.$get(
        `/api/leaderboard?id=${routeName}`
      )
      return {
        NavList,
        guildID: routeName,
        thisRoute: 'levels',
        leaderboard: leaderboardData,
      }
    } else {
      return {
        NavList,
        guildID: routeName,
        thisRoute: 'levels',
        leaderboard: {
          server: [],
          level: [],
          eco: [],
          inv: [],
          msgs: [],
        },
      }
    }
  },
}
</script>