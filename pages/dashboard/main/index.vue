<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
      <div id="members" class="flex flex-col p-4 space-y-4">
        <div class="bg-discortics-dashboard rounded-md h-24">
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
        <div class="bg-discortics-dashboard rounded-md h-48">
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
        <div class="bg-discortics-dashboard rounded-md h-24">
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
        <div class="bg-discortics-dashboard rounded-md h-48">
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
        <div class="bg-discortics-dashboard rounded-md h-24">
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
        <div class="bg-discortics-dashboard rounded-md h-48">
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
        <div class="bg-discortics-dashboard rounded-md h-24">
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
        <div class="bg-discortics-dashboard rounded-md h-48">
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
      <div class="mx-auto bg-discortics-dashboard rounded-md h-48">
        <div class="border-b border-dashed border-gray-500">
          <div class="p-4">
            <p class="text-lg">Prefix</p>
          </div>
        </div>
        <div class="p-4 flex flex-col md:flex-row items-center mx-auto">
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
            <!--
                <span class = "px-2 invisible group-focus:visible absolute bottom-0 left-10 top-20 mx-auto"><span class = "bg-discortics-link rounded-md p-2 shadow-md">{{prefix.length}}</span></span>
                -->
          </div>
          <div class="p-4">
            <button
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
            >
              Update Prefix
            </button>
          </div>
          <div class="text-sm text-gray-300">
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
  data() {
    const resp = {
      msgstotal: 286512,
      msgs: [
        ['「💬」general', 111009],
        ['「🤖」commands', 39405],
        ['〚👮〛chat', 36904],
        ['「✋」bot-support¹', 33500],
        ['〚🤖〛commands', 10148],
        ['〉chat', 5109],
      ],
      countlist: {
        '7th Aug': { join: 70, leave: 49 },
        '8th Aug': { join: 71, leave: 46 },
        '9th Aug': { join: 79, leave: 56 },
        '10th Aug': { join: 98, leave: 39 },
        '11th Aug': { join: 106, leave: 65 },
        '12th Aug': { join: 66, leave: 0 },
        '13th Aug': { join: 67, leave: 31 },
        '14th Aug': { join: 64, leave: 26 },
        '15th Aug': { join: 57, leave: 27 },
        '16th Aug': { join: 79, leave: 40 },
        '17th Aug': { join: 78, leave: 38 },
        '18th Aug': { join: 108, leave: 33 },
        '19th Aug': { join: 83, leave: 43 },
        '20th Aug': { join: 146, leave: 109 },
        '21st Aug': { join: 89, leave: 53 },
        '22nd Aug': { join: 99, leave: 42 },
        '23rd Aug': { join: 86, leave: 66 },
        '24th Aug': { join: 171, leave: 59 },
        '25th Aug': { join: 142, leave: 78 },
        '26th Aug': { join: 0, leave: 13 },
      },
      total: 8551,
      online: 7000,
      dnd: 550,
      idle: 540,
      offline: 451,
    }
    return {
      prefix: '',
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