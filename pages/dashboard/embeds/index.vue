<template>
  <div class="p-8">
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
        md:flex-row
        justify-center
        items-center
        space-y-4
        mx-auto
        md:space-x-4 md:space-y-0
      "
    >
      <NuxtLink
        to="/dashboard/embeds/new"
        class="
          p-4
          bg-green-600
          block
          rounded-md
          w-full
          md:max-w-md
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
          bg-yellow-700
          block
          rounded-md
          w-full
          md:max-w-md
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