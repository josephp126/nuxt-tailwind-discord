<template>
  <div
    class="
      flex flex-col
      itemx-center
      bg-discortics-500
      z-50
      bg-opacity-100
      rounded-md
      w-full
    "
    aria-labelledby="userProfileDropdown"
  >
    <div class="user-profile-section p-4">
      <div class="media mx-auto flex justify-left">
        <div class="p-2">
          <img
            id="main_prof"
            :src="
              'https://cdn.discordapp.com/avatars/' +
              $auth.user.id +
              '/' +
              $auth.user.avatar +
              '.webp'
            "
            class="object-cover w-24"
            alt="discordian"
          />
        </div>
        <div class="media-body my-auto font-bold">
          <p id="main_name">{{ $auth.user.username.split(" ")[0] }}</p>
        </div>
      </div>
    </div>
    <div class="flex dropdown-item p-2 px-4 block">
      <a href="/user/" class="group flex justify-between text-lg"
        ><SVGUser />
        <span class="group-hover:text-gray-500">My Profile</span></a
      >
    </div>
    <div class="flex dropdown-item p-2 px-4 block">
      <a href="/dashboard" class="group flex justify-between text-lg"
        ><SVGServer />
        <span class="group-hover:text-gray-500">Servers</span></a
      >
    </div>
    <div id="signout" class="flex dropdown-item p-2 pb-4 px-4 block">
      <a href="/logout" class="group flex justify-between text-lg"
        ><SVGLogout />
        <span class="group-hover:text-gray-500">Sign Out</span></a
      >
    </div>
  </div>
</template>