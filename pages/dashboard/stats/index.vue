<template>
  <div class = "max-w-6xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-4 lg:grid-cols-2">
      <div id="members" class="flex flex-col p-4 space-y-4">
        <div class="bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border rounded-md lg:h-24">
          <div class="p-2 flex flex-row justify-between">
            <div class="p-2">
              <div
                class="
                  rounded-full
                  flex
                  items-center
                  p-2
                  bg-blue-500
                  text-white
                "
              >
                <SVGFriends size="20" />
              </div>
            </div>
            <div class="flex flex-col p-2">
              <span class="font-semibold p-px text-md">{{
                resp.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}</span>
              <span class="text-gray-300 p-px text-sm">Total Members</span>
            </div>
          </div>
        </div>
        <div class="bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border rounded-md lg:h-48">
          <div class="p-4">
            <apexchart
              height="160"
              type="donut"
              :series="[resp.offline, resp.idle, resp.dnd, resp.online]"
              :options="confPresence"
            />
          </div>
        </div>
      </div>

      <div id="joins" class="flex flex-col p-4 space-y-4">
        <div class="bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border rounded-md lg:h-24">
          <div class="p-2 flex flex-row justify-between">
            <div class="p-2">
              <div
                class="
                  rounded-full
                  flex
                  items-center
                  p-2
                  bg-green-500
                  text-white
                "
              >
                <SVGStonks size="20" />
              </div>
            </div>
            <div class="flex flex-col p-2">
              <span class="font-semibold p-px text-md">{{
                Object.values(resp.countlist)[19]
                  .join.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}</span>
              <span class="text-gray-300 p-px text-sm">Joins</span>
            </div>
          </div>
        </div>
        <div class="bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border rounded-md lg:h-48">
          <div class="p-4">
            <apexchart
              height="160"
              type="area"
              :series="[
                {
                  name: 'Joins',
                  data: Object.values(resp.countlist).map((x) => x.join),
                },
              ]"
              :options="confJoins"
            />
          </div>
        </div>
      </div>

      <div id="leaves" class="flex flex-col p-4 space-y-4">
        <div class="bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border rounded-md lg:h-24">
          <div class="p-2 flex flex-row justify-between">
            <div class="p-2">
              <div
                class="rounded-full flex items-center p-2 bg-red-500 text-white"
              >
                <SVGNotStonks size="20" />
              </div>
            </div>
            <div class="flex flex-col p-2">
              <span class="font-semibold p-px text-md">{{
                Object.values(resp.countlist)[19]
                  .leave.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}</span>
              <span class="text-gray-300 p-px text-sm">Leaves</span>
            </div>
          </div>
        </div>
        <div class="bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border rounded-md lg:h-48">
          <div class="p-4">
            <apexchart
              height="160"
              type="area"
              :series="[
                {
                  name: 'Leaves',
                  data: Object.values(resp.countlist).map((x) => x.leave),
                },
              ]"
              :options="confLeaves"
            />
          </div>
        </div>
      </div>

      <div id="messages" class="flex flex-col p-4 space-y-4">
        <div class="bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border rounded-md lg:h-24">
          <div class="p-2 flex flex-row justify-between">
            <div class="p-2">
              <div
                class="
                  rounded-full
                  flex
                  items-center
                  p-2
                  bg-yellow-500
                  text-white
                "
              >
                <SVGMessageSquare size="20" />
              </div>
            </div>
            <div class="flex flex-col p-2">
              <span class="font-semibold p-px text-md">{{
                resp.msgstotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}</span>
              <span class="text-gray-300 p-px text-sm">Messages</span>
            </div>
          </div>
        </div>
        <div class="bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border rounded-md lg:h-48">
          <div class="p-4">
            <apexchart
              height="160"
              type="bar"
              :series="[
                {
                  name: 'Messages',
                  data: resp.msgs.map((x) => x[1]),
                },
              ]"
              :options="confMessages"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 px-4">
      <div class="mx-auto bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border rounded-md lg:h-48">
        <div class="border-b border-dashed border-gray-500">
          <div class="p-4">
            <p class="text-lg">Prefix</p>
          </div>
        </div>
        <div class="p-4 flex flex-col lg:flex-row items-center mx-auto">
          <div class="p-4 group relative">
            <input
              v-model="prefix"
              class="
                bg-discortics-quote
                border-gray-500
                p-2
                border
                rounded-md
                w-72
                h-12
              "
              maxlength="10"
            />
          </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import conf from './conf'
console.log({
  ...conf,
  labels: ['Offline', 'Idle', 'DND', 'Online'],
})
export default {
  layout: 'dashboard',
  async asyncData(ctx) {
    localStorage.setItem('guildID', "708944530413453393")
const token = localStorage.getItem('sessionToken')
    let resp = await ctx.$api.request({
      url: `/v1/membercount?id=${localStorage.getItem(
        'guildID'
      )}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    resp = resp.data

    return {
      resp,
      confPresence: {
        ...conf,
        colors: ['#4377f7', '#6e98ff', '#91b1ff', '#1b55e2'],
        labels: ['Offline', 'Idle', 'DND', 'Online'],
        fill: {
          opacity: 1,
        },
      },
      confJoins: {
        ...conf,
        labels: Object.keys(resp.countlist),
        colors: ['#009688'],
      },
      confLeaves: {
        ...conf,
        labels: Object.keys(resp.countlist),
        colors: ['#e7515a'],
      },
      confMessages: {
        ...conf,
        xaxis: {
          categories: resp.msgs.map((x) => x[0]),
        },
        tooltip: {
          x: {
            show: true,
          },
          enabled: true,
        },
        colors: ['#ffc830'],
      },
    }
  },
}
</script>