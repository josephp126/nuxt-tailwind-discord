<template>
  <div
    class="
      flex flex-col
      itemx-center
      bg-discortics-header
      z-50
      shadow-md
      bg-opacity-100
      rounded-md
      w-72
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
            class="object-cover w-8"
            alt="discordian"
          />
        </div>
        <div class="media-body my-auto font-bold">
          <p id="main_name">{{ $auth.user.username.split(" ")[0] }}</p>
        </div>
      </div>
    </div>
    <div class="flex dropdown-item p-2 px-4 block">
      <a href="/user/" class="group flex space-x-2 justify-between text-lg"
        ><SVGUser />
        <span class="transition duration-500 ease-in-out group-hover:text-gray-500">My Profile</span></a
      >
    </div>
    <div class="flex dropdown-item p-2 px-4 block">
      <TopbarServer />
    </div>
    <div id="signout" class="flex dropdown-item p-2 pb-4 px-4 block">
      <a href="/logout" class="group flex space-x-2 justify-between text-lg"
        ><SVGLogout />
        <span class="transition duration-500 ease-in-out group-hover:text-gray-500">Sign Out</span></a
      >
    </div>
  </div>
</template>