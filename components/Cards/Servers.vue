<template>
    <div class = "p-4 relative">
    <a href = "https://discortics.xyz">
    <div class = "p-2 bg-discortics-server rounded-md transform transition duration-500 ease-in-out hover:scale-110 hover:translate-y-1 block">
        <div class = "mx-auto p-8 flex-col">
            <img class = "w-full md:w-24 object-cover mx-auto" :src = "icon" alt = "server icon" />
            <p class = "font-semibold p-2 text-center">Server {{name}}</p>
            <div class = "absolute text-center mx-auto -bottom-4 inset-x-8 p-2">
            <a class = "block transition duration-300 text-gray-300 p-2 ease-in-out flex items-center flex-wrap bg-red-500 border border-white rounded-md hover:text-white" href = "https://discortics.xyz">
            <span class = "text-center mx-auto">Invite</span>
            </a>
        </div>
        </div>
    </div>
</a>
</div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: null,
        },
        icon: {
            type: String,
            default() { 
                return "/img/joshua.jpg"
            }
        }
    }
}
</script>