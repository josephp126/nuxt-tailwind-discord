<template>
        <div class="flex flex-col itemx-center bg-discortics-500 z-50 bg-opacity-100 rounded-md w-full" aria-labelledby="userProfileDropdown">
        <div class="user-profile-section p-4">                            
            <div class="media mx-auto flex justify-left">
                <div class = "p-2">
                <img id="main_prof" src="/img/user_icon.png" class="object-cover w-24" alt="discordian">
                </div>
                <div class="media-body my-auto font-bold">
                    <p id="main_name">Discordian</p>
                </div>
            </div>
        </div>
            <div class="flex dropdown-item p-2 px-4 block">
                <a href = "/user/" class="group flex justify-between text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="px-1 text-gray-500 group-hover:text-white feather feather-user h-full"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span class = "group-hover:text-gray-500">My Profile</span></a>
            </div>
            <div class="flex dropdown-item p-2 px-4 block">
                <a href = "/dashboard"  class="group flex justify-between text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="px-1 text-gray-500 group-hover:text-white feather feather-server h-full"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> <span class = "group-hover:text-gray-500">Servers</span></a>
            </div>
            <div id="signout" class="flex dropdown-item p-2 pb-4 px-4 block">
                <a href = "/signout"  class="group flex justify-between text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="px-1 text-gray-500 group-hover:text-white feather feather-log-out h-full"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> <span class = "group-hover:text-gray-500">Sign Out</span></a>
            </div>
    </div>
</template>