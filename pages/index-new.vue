<template lang="">
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus maxime quos repellat explicabo quam doloremque doloribus voluptates quis magnam! Dolor ducimus odio non dolorum, dicta reprehenderit fugiat aperiam cum delectus?
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
}
</script>
<style lang="">
    
</style>