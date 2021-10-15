<template>
  <div>
    <div class="flex flex-col lg:flex-row">
      <div class="py-8 lg:p-8 lg:pl-0 w-full">
        <div class="bg-discortics-dashboard block rounded-md h-24 w-full">
          <div class="p-4">
            <button
              class="
                bg-blue-500
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
              @click = "$auth.logout"
            >
              <SVGPlus size="20" />
              <span class="pl-2"> Add Tag {{$store.state.dash.token}} </span>
            </button>
          </div>
        </div>
      </div>
      <div class="py-8 lg:p-8 w-full">
        <div class="bg-discortics-dashboard rounded-md h-24 w-full">
          <div class="p-4">
            <button
              class="
                bg-yellow-500
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
              <SVGReset size="20" />
              <span class="pl-2"> Reset Tags </span>
            </button>
          </div>
        </div>
      </div>
      <div class="py-8 lg:p-8 lg:pr-0 w-full">
        <div class="bg-discortics-dashboard rounded-md h-24 w-full">
          <div class="p-4">
            <button
              class="
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
    <div class="grid grid-cols-1 lg:grid-cols-2 py-8 gap-2">
      <InputTag name="Never" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'dashboard',
  middleware: 'server_exists',
}
</script>