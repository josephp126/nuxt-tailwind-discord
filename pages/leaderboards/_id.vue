<template>
  <div class="lg:px-8">
    <div class="flex flex-col justify-between pt-10">
      <div class="lg:p-8 py-8 w-full h-full max-h-48">
        <div class="card bg-discortics-dashboard w-full rounded-lg h-full">
          <div class="flex flex-row justify-between items-center">
            <div class="flex flex-row justify-left items-center">
              <div class="p-2">
                <img
                  id="servericon"
                  :src="leaderboard.server[1]"
                  width="90"
                  height="90"
                  class="object-cover w-24 h-24 mx-auto"
                  alt="..."
                />
              </div>
              <div class="flex flex-col items-center justify-center">
                <span class="pr-2 font-semibold">
                  {{ leaderboard.server[0] }}
                </span>
                <span class="pr-2"> Members: {{ leaderboard.server[2] }} </span>
              </div>
            </div>
            <div>
              <div class="p-2 flex flex-row justify-right items-center">
                <div @click="thisRoute = 'levels'">Levels</div>
                <div @click="thisRoute = 'eco'">Economy</div>
                <div @click="thisRoute = 'inv'">Inventory</div>
                <div @click="thisRoute = 'msgs'">Messages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:p-8 py-8 w-full h-full">
        <div
          class="
            flex flex-col
            lg:flex-row
            bg-discortics-dashboard
            w-full
            rounded-lg
          "
        >
          <div class="p-8 w-full">
            <div v-if="thisRoute == 'levels'">
              <div class="flex flex-col items-center space-y-4 w-full h-full">
                <CardsLevel
                  v-for="user in leaderboard.level
                    .sort((a, b) => a[2] - b[2])
                    .reverse()
                    .slice(0, 100)"
                  :key="user[0]"
                  :user="user"
                />
              </div>
            </div>

            <div v-if="thisRoute == 'eco'">
              <div class="flex flex-col items-center space-y-4 w-full h-full">
                <CardsLevel
                  v-for="user in leaderboard.eco
                    .sort((a, b) => a[2] - b[2])
                    .reverse()
                    .slice(0, 100)"
                  :key="user[0]"
                  :user="user"
                />
              </div>
            </div>

            <div v-if="thisRoute == 'inv'">
              <div class="flex flex-col items-center space-y-4 w-full h-full">
                <CardsLevel
                  v-for="user in leaderboard.inv
                    .sort((a, b) => a[2] - b[2])
                    .reverse()
                    .slice(0, 100)"
                  :key="user[0]"
                  :user="user"
                />
              </div>
            </div>

            <div v-if="thisRoute == 'msgs'">
              <div class="flex flex-col items-center space-y-4 w-full h-full">
                <CardsMsgCount
                  v-for="user in leaderboard.msgs
                    .sort((a, b) => a[1] - b[1])
                    .reverse()
                    .slice(0, 100)"
                  :key="user[0]"
                  :user="user"
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
import NavList from '@/data/NavLeaderboard'
export default {
  layout: 'dashboard',
  async asyncData(context) {
    let routeName = null
    if (context.route.params.id)
      routeName = context.route.params.id.toLowerCase()
    console.log(routeName)
    if (!/^(\d{17,19})$/.test(routeName)) routeName = null
    console.log(routeName)
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