<template>
    <div class="py-1 lg:py-8 px-4">
      <div class="mx-auto max-w-xl form-card w-full lg:w-112 relative lg:h-64 overflow-hidden">
        <div class="px-8">
          <div class="gradient-circle w-24 h-24 absolute right-2 top-2" />
          <div class="pt-2">
            <div class="py-2">
              <p class="text-2xl pt-2 pb-1 font-semibold font-montserrat">Language</p>
              <p class="text-sm pt-1 pb-2">
                Do you not prefer English? Change it to a suitable one below!
              </p>
            </div>
          </div>
          <div class="py-2 flex flex-col lg:flex-row items-center mx-auto">
            <div class="group relative">
              <select
                class="
                  border-gray-500 border-opacity-80
                  bg-transparent
                  p-2
                  border-2
                  rounded-md
                  w-72
                  h-12
                "
                maxlength="10"
              >
              <option>English</option>
              </select>
            </div>
          </div>
          <div
            class="
              flex flex-row flex-wrap
              justify-start
              space-x-2
              py-2
              text-gray-300
              pointer-events-none
            "
          >
            <div class="h-8 py-3 flex flex-row items-center">
              <span class="exampleText text-xs p-2">This is an example</span>
            </div>
            <div class="h-8 py-3 flex flex-row items-center">
              <span class="exampleText text-xs p-2">Successful</span>
            </div>
            <div class="h-8 py-3 flex flex-row items-center">
              <span class="exampleText text-xs p-2">Or not?</span>
            </div>
          </div>
        </div>
      </div></div>
</template>

<script>

</script>