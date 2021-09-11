<template>
  <div>
    <div class="flex flex-col lg:flex-row">
      <div class="py-8 lg:p-8 lg:pl-0 w-full">
        <div class="flex flex-row space-x-4">
          <div
            class="
              bg-discortics-dashboard
              block
              rounded-md
              h-24
              w-full
              p-4
              flex flex-row
              justify-between
              items-center
            "
          >
            <p class="p-2 text-xl font-semibold">Levels</p>
            <select
              class="
                w-full
                bg-discortics-quote
                text-discortics-link
                rounded-md
                block
                p-2
                font-semibold
              "
            >
              <option>a</option>
            </select>
          </div>
          <div
            class="
              bg-discortics-dashboard
              block
              rounded-md
              h-24
              w-full
              p-4
              flex flex-row
              justify-between
              items-center
            "
          >
            <p class="p-2 text-xl font-semibold flex">Level Up Channel</p>
            <select
              class="
                w-full
                bg-discortics-quote
                text-discortics-link
                rounded-md
                block
                p-2
                font-semibold
              "
            >
              <option>a</option>
            </select>
          </div>
          <div
            class="
              bg-discortics-dashboard
              block
              rounded-md
              h-24
              w-full
              p-4
              flex flex-row
              justify-between
              items-center
            "
          >
            <div class="p-4 w-full">
              <button
                class="
                  mx-auto
                  bg-green-500
                  rounded-md
                  block
                  transition
                  duration-500
                  ease-in-out
                  transform
                  hover:translate-y-1
                  flex flex-row
                  items-center
                  p-4
                  mx-auto
                "
              >
                <SVGCheckCircle size="20" />
                <span class="pl-2"> Save Current Settings </span>
              </button>
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
}
</script>