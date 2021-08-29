<template>
  <div>
    <div class="flex flex-col lg:flex-row">
      <div class="p-8 pl-0 w-full">
        <div class="bg-discortics-dashboard rounded-md h-24 w-full">
          <div class="p-4">
            <button class="bg-blue-500 rounded-md block transition duration-500 ease-in-out transform hover:translate-y-1 flex flex-row items-center p-4 mx-auto">
              <SVGPlusCircle size="20" />
              <span class="pl-2"> Add Tag </span>
            </button>
          </div>
        </div>
      </div>
      <div class="p-8 pl-0 w-full">
        <div class="bg-discortics-dashboard rounded-md h-24 w-full">
          <div class="p-4">
            <button class="bg-yellow-500 rounded-md block transition duration-500 ease-in-out transform hover:translate-y-1 flex flex-row items-center p-4 mx-auto">
              <SVGPlusCircle size="20" />
              <span class="pl-2"> Reset Tags </span>
            </button>
          </div>
        </div>
      </div>
      <div class="p-8 pl-0 w-full">
        <div class="bg-discortics-dashboard rounded-md h-24 w-full">
          <div class="p-4">
            <button class="bg-green-500 rounded-md block transition duration-500 ease-in-out transform hover:translate-y-1 flex flex-row items-center p-4 mx-auto">
              <SVGPlusCircle size="20" />
              <span class="pl-2"> Save Current Settings </span>
            </button>
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