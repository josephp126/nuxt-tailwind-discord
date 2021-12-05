<template lang="">
    <div>
      

        <!-- banner section start  -->
        <section  :style="bgLayer" class=" relative bg-center bg-cover bg-no-repeat pt-16" >
            <div class="container grid grid-cols-1 xl:grid-cols-3 items-center">
                <!-- Information  -->
                    <div class=" ">
                        <h2 class="font-montserrat text-4xl lg:text-body55  text-blue4f font-bold mb-4 lg:mb-8 ">Welcome to  Discoritics</h2>
                        <p class="text-body17 capitalize font-quicksand font-normal mb-8 ">Discortics™ is a highly efficient modern Discord Bot for almost all your Needs! Being completely free, Discortics™ brings many Premium Features right at your fingertips. What are you waiting for?</p>
                        <div class="flex flex-col  sm:flex-row  items-center space-y-4 sm:space-y-0 sm:space-x-4">
                             <nuxt-link to="#" class="bg-green4f text-black24 font-bold rounded-full flex items-center justify-center text-body15 font-quicksand uppercase py-5 px-8 tracking-wider	text-center w-full   sm:w-auto ">
                                DASHBOARD
                                <img class="ml-3" src="/svg/dashboard-btn.svg" alt="">
                            </nuxt-link>
                            <nuxt-link to="#" class=" border border-grayb5 border-opacity-80 text-gray9d font-bold rounded-full flex items-center text-body15 font-quicksand uppercase py-5 px-8 tracking-wider justify-center w-full   sm:w-auto ">
                                INVITE BOT
                                <img class="ml-3" src="/svg/plane.svg" alt="">
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="xl:col-span-2 row-start-1 xl:row-start-auto ">
                        <div>
                            <img src="/img/bg-dashboard.png" alt="background-layer" class=" max-w-full " >
                        </div>
                    </div>
            </div>  
        </section>
        <!-- banner section end  -->

        <!-- Don't Cross this Border  -->
        <!-- Slider Start -->
        <div class="container">
            <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                <div class="flex items-center">
                    <img class="mr-4" src="/svg/slider-icon1.svg" alt="">
                    <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Fred Boat</h4>
                </div>
                <div class="flex items-center">
                    <img class="mr-2" src="/svg/user.svg" alt="">
                    <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                </div>
            </div>
            
        </div>
        <!-- Slider End -->
        <!-- Start Server Section -->
        <div class="bg-content bg-no-repeat bg-center bg-black24 py-24" :style="ServerImage">
            <div class="container">
                <div class="lg:grid grid-cols-12 gap-6 items-center">
                    <div class="col-span-6 2xl:pr-56 mb-8 lg:mb-0">
                        <h2 class="text-green4f text-4xl sm:text-5xl font-montserrat font-normal mb-4">Build the <span class="font-bold">server</span>  of your <span class="font-bold">dreams.</span> </h2>
                        <p class="text-body17 text-white text-opacity-75 font-quicksand font-medium lg:pr-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor sed tellus massa adipiscing egestas placerat. Condimentum tempor lorem eu mi pretium nunc.</p>
                    </div>
                    <div class="col-span-6">
                        <div class="sm:flex flex-wrap justify-center sm:space-x-5">
                            <nuxt-link to="/" class="bg-green4f text-black24 font-bold rounded-full flex items-center justify-center text-body15 font-quicksand uppercase py-4 px-8 tracking-wider	text-center mb-4 sm:mb-0">
                                DASHBOARD
                                <img class="ml-3" src="/svg/dashedboard.svg" alt="">
                            </nuxt-link>
                            <nuxt-link to="/" class=" border border-grayb5 border-opacity-80 text-gray9d font-bold rounded-full flex items-center text-body15 font-quicksand uppercase py-4 px-8 tracking-wider justify-center">
                                INVITE BOT
                                <img class="ml-3" src="/svg/plane.svg" alt="">
                            </nuxt-link>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        <!-- End Sever -->
    </div>
</template>
<script>
export default {
    name: 'IndexNew',
    data() { 
        return { 
            bgLayer: { 
                backgroundImage: `url(https://i.imgur.com/XbYc0CR.png)`
            },
            bannerInformation: [
                {
                    title: 'Welcome to Discoritics',
                    description: `Discortics™ is a highly efficient modern Discord Bot for almost all your Needs! Being completely free, Discortics™ brings many Premium Features right at your fingertips. What are you waiting for?`
                }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>