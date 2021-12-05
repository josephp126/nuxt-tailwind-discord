<template>
    <div>
        
        <!-- Start footer -->
        <footer>
            <!-- Footer top -->
            <div class="border-b border-green4f border-opacity-50 py-12">
                <div class="container">
                    <div class="grid grid-cols-12 gap-6 lg:items-center ">
                        <div class="sm:col-span-3 col-span-12">
                            <nuxt-link class="w-14 block" to="/"><img src="/img/90x90.png" alt=""></nuxt-link>
                        </div>
                        <div class="col-span-6 flex sm:justify-center">
                            <ul class="lg:flex lg:space-x-6 lg:space-y-0 space-y-2 justify-center">
                                <li v-for="(item, itemIndex) in items" :key="itemIndex">
                                    <nuxt-link  class="text-white text-opacity-90 text-sm font-quicksand uppercase font-bold tracking-widest duration-300 hover:text-green4f" to="/">{{item.footerMenuData}}</nuxt-link> 
                                </li>
                            </ul>
                        </div>
                        <div class="sm:col-span-3 col-span-6">
                            <ul class="flex space-x-6 lg:space-x-12 justify-center sm:justify-end">
                                <li><nuxt-link to="/"><img src="/svg/facebook.svg" alt=""></nuxt-link></li>
                                <li><nuxt-link to="/"><img src="/svg/twitter.svg" alt=""></nuxt-link></li>
                                <li><nuxt-link to="/"><img src="/svg/youtube.svg" alt=""></nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer bottom -->
            <div class="container">
                <div class="lg:grid grid-cols-12 gap-6 py-10">
                    <div class="col-span-6 text-center lg:text-left">
                        <p class="text-white text-opacity-50 text-sm font-quicksand mb-4 lg:mb-0 ">Copyright &copy; 2021 Discortics™, All rights reserved</p>
                    </div>
                    <div class="col-span-6">
                        <ul class="flex justify-center lg:justify-end items-center space-x-1">
                            <li class="text-white text-opacity-50 text-sm font-quicksand uppercase font-bold tracking-widest"><nuxt-link to="/">Privacy Policy</nuxt-link></li>
                            <li class="text-white text-opacity-50 text-sm font-quicksand uppercase font-bold tracking-widest">|</li>
                            <li class="text-white text-opacity-50 text-sm font-quicksand uppercase font-bold tracking-widest"><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
                            <li class="text-white text-opacity-50 text-sm font-quicksand uppercase font-bold tracking-widest">| </li>
                            <li class="text-white text-opacity-50 text-sm font-quicksand uppercase font-bold tracking-widest"><nuxt-link to="/">refund policy</nuxt-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <!-- End footer -->
        
        
        
    </div>
</template>
<script>
export default {
    name:'FooterNew',
    data(){
        return{
            items: [
                {footerMenuData: "Dashboard"},
                {footerMenuData: "Documentation"},
                {footerMenuData: "Server list"},
                {footerMenuData: "Pricing"},
                {footerMenuData: "Support"},
                {footerMenuData: "F.A.Q"},
            ],
            // ServerImage: {
            //     backgroundImage: "url(https://i.imgur.com/5yDGYYX.png)",
            // },
        }
    },
}
</script>
<style>
    
</style>