<template>
  <div class="p-8 w-full">
    <div
      class="
        p-8
        w-full
        mx-auto
        text-center
        flex
        justify-center
        font-semibold
        text-lg
        items-center
      "
    >
      What would you like to do?
    </div>
    <div
      class="
        flex flex-col
        lg:flex-row
        justify-center
        items-center
        space-y-4
        mx-auto
        lg:space-x-4 lg:space-y-0
      "
    >
      <NuxtLink
        to="/dashboard/embeds/new"
        class="
          p-4
bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border           block
          rounded-md
          w-full
          lg:max-w-md
          transition
          duration-500
          ease-in-out
          cursor-pointer
          transform
          hover:translate-y-1
        "
      >
        <div class="p-8 flex flex-col items-center">
          <SVGFile />
          <span class="text-lg font-semibold">Create New Embed</span>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/embeds/edit"
        class="
          p-4
bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border           block
          rounded-md
          w-full
          lg:max-w-md
          transition
          duration-500
          ease-in-out
          cursor-pointer
          transform
          hover:translate-y-1
        "
      >
        <div class="p-8 flex flex-col items-center">
          <SVGEdit />
          <span class="text-lg font-semibold">Edit Existing Embed</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'dashboard',
}
</script>