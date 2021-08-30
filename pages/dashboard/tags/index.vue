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
            >
              <SVGPlusCircle size="20" />
              <span class="pl-2"> Add Tag </span>
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
              <SVGPlusCircle size="20" />
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
              <SVGPlusCircle size="20" />
              <span class="pl-2"> Save Current Settings </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 py-8">
      <div class="bg-discortics-dashboard py-2 rounded-md lg:h-24 w-full">
                <div class="p-4 flex flex-col md:flex-row items-center mx-auto">
          <div class="p-4 group relative">
            <input
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
              Update
            </button>
          </div>
          <div :class="`text-sm`">
            Prefix can be a maximum of 10 characters.
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