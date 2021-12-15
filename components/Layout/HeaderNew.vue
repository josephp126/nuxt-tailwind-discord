<template>
    <div class="relative">
        <VueScrollFixedNavbar>
                <header class="absolute top-7 lg:top-14 w-full py-3 lg:py-0 z-20 transition-all duration-300 ">
                    <div class="container grid grid-cols-2 lg:grid-cols-3 lg:justify-items-center items-center">
                        <!-- left Menu  -->
                        <div class="hidden lg:block justify-self-start">
                            <ul class="flex items-center space-x-4 xl:space-x-12">
                                <li>
                                    <nuxt-link to="/index-new" class="text-base capitalize text-graye1 hover:text-blue4f transition-all">Home</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="#" class="text-base capitalize text-graye1 hover:text-blue4f transition-all">Dashboard</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="#" class="text-base capitalize text-graye1 hover:text-blue4f transition-all">Documentation</nuxt-link>
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
                                    <nuxt-link to="#" class="text-base capitalize font-quicksand font-medium text-graye1 hover:text-blue4f transition-all"> Support</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="#" class="text-base capitalize font-quicksand font-medium text-graye1 hover:text-blue4f transition-all"> Pricing</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="#" class="text-base capitalize font-quicksand font-medium text-graye1 hover:text-blue4f transition-all"> More</nuxt-link>
                                </li>
                                <!-- Login Button -->
                                <li>
                                    <nuxt-link to="#" class="flex items-center space-x-3 relative rounded-full border border-blue4f py-3 px-6">
                                        <span class="img-fluid flex-shrink-0">
                                            <img src="/svg/discord.svg" alt="icon" />
                                        </span>
                                        <p class="font-quicksand font-bold text-xs uppercase text-blue4f">Login</p>
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Mobile Navigation Menu  -->
                    <div v-if="sideBar" :class="`sidebar max-w-full md:max-w-3xl mx-auto absolute left-0 md:left-1/2 transform md:-translate-x-1/2  top-full w-full bg-black24 bg-opacity-80  shadow-lg lg:hidden z-10  rounded-b-md transition-all duration-700 ${sideBar ? ' translate-y-0' : '-translate-y-0.5'}  `">
                        <ul class="flex flex-col items-center space-y-4 py-5">
                            <li>
                                <router-link class="text-base capitalize text-graye1 hover:text-blue4f transition-all" to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link class="text-base capitalize text-graye1 hover:text-blue4f transition-all" to="#">Dashboard</router-link>
                            </li>
                            <li>
                                <router-link class="text-base capitalize text-graye1 hover:text-blue4f transition-all" to="#">Documentation</router-link>
                            </li>
                            <li>
                                <router-link class="text-base capitalize text-graye1 hover:text-blue4f transition-all" to="#">Support</router-link>
                            </li>
                            <li>
                                <router-link class="text-base capitalize text-graye1 hover:text-blue4f transition-all" to="#">Pricing</router-link>
                            </li>
                            <li>
                                <router-link class="text-base capitalize text-graye1 hover:text-blue4f transition-all" to="#">More</router-link>
                            </li>
                            <!-- Login Button -->
                            <li>
                                <nuxt-link to="#" class="flex items-center space-x-3 relative rounded-full border border-blue4f py-3 px-6">
                                    <span class="img-fluid flex-shrink-0">
                                        <img src="/svg/discord.svg" alt="icon" />
                                    </span>
                                    <p class="font-quicksand font-bold text-xs uppercase text-blue4f">Login</p>
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
        },
    };
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
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
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
        @apply bg-black24 top-0 py-4
    }
    #myHeader.sticky .sidebar {
        @apply bg-opacity-95
    }

</style>
