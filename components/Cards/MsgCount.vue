<template>
  <div
    class="
      py-2
      rounded-md
      lg:max-h-24
      lg:h-20
      flex
      items-center
      w-full
    "
  >
    <div class="flex flex-row justify-between w-full">
      <div class="rounded-full my-auto">
        <img
          class="w-20 object-cover rounded-full"
          :src="user[3] || '/img/user_icon.png'"
          :alt="user[2]"
        />
      </div>
      <div class="flex flex-col w-full justify-center items-center">
        <div class="p-2 flex flex-row w-full text-sm text-gray-400 justify-between">
          <div class="p-px">
            {{ user[2] || "Unknown User" }} ({{ user[0] }})
          </div>
          <div class="p-px text-center">
            {{ user[1] }} Messages
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Array,
      default() {
        return [
          '504965310823006228',
          86,
          755046.6,
          739600,
          756900,
          'Joshua | Rem-Chan',
          '/img/joshua.jpg',
        ]
      },
    },
  },
}
</script>