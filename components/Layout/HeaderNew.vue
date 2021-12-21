<template>
    <div class="relative">
        <VueScrollFixedNavbar>
                <header class="absolute top-7 lg:top-5 py-3 w-full z-20 transition-all duration-300 ">
                    <div class="container grid grid-cols-2 lg:grid-cols-3 lg:justify-items-center items-center">
                        <!-- left Menu  -->
                        <div class="hidden lg:block justify-self-start">
                            <ul class="flex items-center space-x-4 xl:space-x-12">
                                <li>
                                    <nuxt-link to="/" class="text-base capitalize text-graye1 hover:text-blue4f transition-all">Home</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/dashboard" class="text-base capitalize text-graye1 hover:text-blue4f transition-all">Dashboard</nuxt-link>
                                </li>
                                <li>
                                    <a href="https://docs.discortics.com" class="text-base capitalize text-graye1 hover:text-blue4f transition-all" target="_blank">Documentation</a>
                                </li>
                            </ul>
                        </div>
                        <!-- brand Logo  -->
                        <div class="justify-self-start lg:justify-self-center">
                            <nuxt-link to="#" class="img-fluid">
                                <img src="/svg/brand-logo.svg" alt="" />
                            </nuxt-link>
                        </div>
                        <!-- toggle menu -->
                        <div class="flex lg:hidden justify-end w-full">
                            <div :class="`toggle ${isActive ? 'active' : ''} `" @click="openSidebar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <!-- Right Menu -->
                        <div class="hidden lg:block justify-self-end">
                            <ul class="flex items-center space-x-4 xl:space-x-12">
                                <li>
                                    <a href="https://discord.gg/buHBCtE" class="text-base capitalize font-quicksand font-medium text-graye1 hover:text-blue4f transition-all" target="_blank"> Support</a>
                                </li>
                                <li>
                                    <a href="https://patreon.com/discortics" class="text-base capitalize font-quicksand font-medium text-graye1 hover:text-blue4f transition-all" target="_blank"> Pricing</a>
                                </li>
                                <li>
                                    <nuxt-link to="#" class="text-base capitalize font-quicksand font-medium text-graye1 hover:text-blue4f transition-all"> More</nuxt-link>
                                </li>
                                <!-- Login Button -->
                                <li>
                                    <div>
                                    <nuxt-link to="/dashboard" class="flex items-center space-x-3 group relative rounded-full border border-blue4f hover:bg-blue4f py-3 px-6">
                                        <!-- <span class="img-fluid flex-shrink-0"> -->
                                            <SVGDiscord class="text-blue4f block transition-all duration-400 ease-in-out w-8 group-hover:hidden" />
                                        <!-- </span> -->
                                        <span class="font-quicksand font-bold transition-all duration-400 ease-in-out text-xs uppercase text-blue4f group-hover:text-discortics-100">Login</span>
                                        <SVGArrowLeft class="hidden text-discortics-100 block transition-all duration-400 ease-in-out group-hover:block" />
                                    </nuxt-link></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Mobile Navigation Menu  -->
                    <div v-if="sideBar" :class="`sidebar max-w-full md:max-w-3xl mx-auto absolute left-0 md:left-1/2 transform md:-translate-x-1/2  top-full w-full lg:hidden z-10  rounded-b-md transition-all duration-700 ${sideBar ? ' translate-y-0' : '-translate-y-0.5'}  `">
                        <ul class="flex flex-col items-center space-y-4 py-5">
                            <li>
                                <router-link class="text-base capitalize text-graye1 hover:text-blue4f transition-all" to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link class="text-base capitalize text-graye1 hover:text-blue4f transition-all" to="/dashboard">Dashboard</router-link>
                            </li>
                            <li>
                                <a class="text-base capitalize text-graye1 hover:text-blue4f transition-all" href="https://docs.discortics.com" target="_blank">Documentation</a>
                            </li>
                            <li>
                                <a class="text-base capitalize text-graye1 hover:text-blue4f transition-all" href="https://discord.gg/buHBCtE" target="_blank">Support</a>
                            </li>
                            <li>
                                <a class="text-base capitalize text-graye1 hover:text-blue4f transition-all" href="https://patreon.com/discortics" target="_blank">Pricing</a>
                            </li>
                            <li>
                                <router-link class="text-base capitalize text-graye1 hover:text-blue4f transition-all" to="#">More</router-link>
                            </li>
                            <!-- Login Button -->
                            <li>
                                <nuxt-link to="/dashboard" class="flex items-center space-x-3 group relative rounded-full border border-blue4f hover:bg-blue4f py-3 px-6">
                                    <!-- <span class="img-fluid flex-shrink-0"> -->
                                        <SVGDiscord class="text-blue4f block transition-all duration-400 ease-in-out w-24 group-hover:hidden" />
                                    <!-- </span> -->
                                    <span class="font-quicksand font-bold transition-all duration-400 ease-in-out text-xs uppercase text-blue4f group-hover:text-discortics-100">Login</span>
                                    <SVGArrowLeft class="hidden text-discortics-100 block transition-all duration-400 ease-in-out group-hover:block" />
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </header>
        </VueScrollFixedNavbar>
    </div>
</template>
<script>
import {VueScrollFixedNavbar} from 'vue-scroll-fixed-navbar'
export default {
    name: "HeaderNew",
    components: { 
        VueScrollFixedNavbar
    },
    data() {
        return {
            isActive: false,
            sideBar: false,
        };
    },
    methods: {
        openSidebar() {
            this.isActive = !this.isActive;
            this.sideBar = !this.sideBar;
        },
    }
}

</script>
<style scoped>
    .toggle {
        width: 65px;
        height: 65px;
        display: flex;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        background: transparent;
        transition: all 0.1s linear;
        /* box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); */
    }
    .toggle span {
        width: 40px;
        height: 3px;
        position: absolute;
        border-radius: 4px;
        background: #4febf9;
        transition: all 0.2s linear;
    }
    .toggle span:nth-child(1) {
        width: 25px;
        left: 15px;
        transform: translateY(-15px);
    }
    .toggle span:nth-child(2) {
        width: 15px;
        left: 15px;
        transform: translateY(15px);
    }
    .toggle.active {
        transform: translateY(3px);
       
    }
    .toggle.active span:nth-child(1) {
        width: 40px;
        transition-delay: 0.03s;
        transform: translateY(0px) rotate(45deg);
    }
    .toggle.active span:nth-child(2) {
        width: 40px;
        transition-delay: 0.06s;
        transform: translateY(0px) rotate(315deg);
    }
    .toggle.active span:nth-child(3) {
        transform: translateX(60px);
    }

    .nuxt-link-active {
        @apply text-blue4f;
    }

    /* Sticky Header */
    #myHeader.sticky  header { 
        top: 0px;
        padding: 16px 0px !important;  
        backdrop-filter: blur( 20px );
        -webkit-backdrop-filter: blur( 20px );
        -moz-backdrop-filter: blur( 20px );
        -ms-background-filter: blur( 20px );
        -o-backdrop-filter: blur( 20px );
        background: rgba( 255, 255, 255, 0.15 );
    }



    /* Dropdown  sidebar  */
    .sidebar { 
        backdrop-filter: blur( 20px ) !important;
        background: rgba( 255, 255, 255, 0.05 );
        -webkit-backdrop-filter: blur( 20px );
    }
</style>
