<template lang="">
    <div>
        <!-- banner section start  -->
        <section :style="bgLayer" class="relative bg-top bg-cover bg-no-repeat pt-56 overflow-hidden ">
            <div class="container grid grid-cols-1 xl:grid-cols-4  items-center">
                <!-- Information  -->
                <div class="xl:col-span-2 xl:max-w-xl text-center xl:text-left overflow-hidden ">
                    <h2 
                     data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="450"
                    data-aos-easing="ease-in-out"
                    class="font-montserrat text-4xl lg:text-body55 text-blue4f font-bold mb-4 lg:mb-8">Welcome to Discoritics</h2>
                    <p
                    data-aos="fade-left"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="160"
                    data-aos-duration="1000"
                     class="text-body17 capitalize font-quicksand font-normal mb-8">
                        Discortics™ is a highly efficient modern Discord Bot for almost all your Needs! Being completely free, Discortics™ brings many Premium Features right at your fingertips. What are you waiting for?
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center xl:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <nuxt-link to="#" class="bg-green4f text-black24 font-bold rounded-full flex items-center justify-center text-body15 font-quicksand uppercase py-5 px-8 tracking-wider text-center w-full sm:w-auto">
                            DASHBOARD
                            <img class="ml-3" src="/svg/dashboard-btn.svg" alt="" />
                        </nuxt-link>
                        <nuxt-link to="#" class="border border-grayb5 border-opacity-80 text-gray9d font-bold rounded-full flex items-center text-body15 font-quicksand uppercase py-5 px-8 tracking-wider justify-center w-full sm:w-auto">
                            INVITE BOT
                            <img class="ml-3" src="/svg/plane.svg" alt="" />
                        </nuxt-link>
                    </div>
                </div>
                <div class=" xl:col-start-3  row-start-1 xl:row-start-auto">
                    <div class="relative banner-img z-10  mb-12 xl:mb-0">
                        <kinesis-container class="" >
                            <kinesis-element :strength="12" type="depth">
                                  <img src="/img/bg-dashboard.png" alt="background-layer" class=" max-w-full  md:max-w-lg  xl:max-w-4xl mx-auto "/>
                            </kinesis-element>
                        </kinesis-container>
                    </div>
                </div>
            </div>

            <!-- counter start   -->
            <div class=" py-16 sm:py-36 lg:pt-24 xl:pb-72">
                <div class="container grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
                    <div class="pb-4 border-b-2 border-gray7e text-center sm:text-left">
                        <h6 class="font-montserrat font-bold text-body48 text-gray7e flex items-center justify-center sm:justify-start uppercase">
                            <VueJsCounter start="0" end="20" duration="1800" class="font-montserrat font-bold text-body48 text-gray7e" />
                            K
                        </h6>
                        <p class="text-base capitalize font-quicksand font-bold text-gray7e">Dependent Servers</p>
                    </div>
                    <div class="pb-4 border-b-2 border-gray7e text-center sm:text-left">
                        <h6 class="font-montserrat font-bold text-body48 text-gray7e flex items-center justify-center sm:justify-start uppercase">
                            <VueJsCounter start="0" end="8" duration="1800" class="font-montserrat font-bold text-body48 text-gray7e" />
                            M+
                        </h6>
                        <p class="text-base capitalize font-quicksand font-bold text-gray7e">Discortics Users</p>
                    </div>
                    <div class="pb-4 border-b-2 border-gray7e text-center sm:text-left">
                        <h6 class="font-montserrat font-bold text-body48 text-gray7e flex items-center justify-center sm:justify-start uppercase">
                            <VueJsCounter start="0" end="50" duration="1800" class="font-montserrat font-bold text-body48 text-gray7e" />
                            +
                        </h6>
                        <p class="text-base capitalize font-quicksand font-bold text-gray7e">Available Commands</p>
                    </div>
                    <div class="pb-4 border-b-2 border-gray7e text-center sm:text-left">
                        <h6 class="font-montserrat font-bold text-body48 text-gray7e flex items-center justify-center sm:justify-start uppercase">
                            <VueJsCounter start="0" end="20" duration="1800" class="font-montserrat font-bold text-body48 text-gray7e" />
                        </h6>
                        <p class="text-base capitalize font-quicksand font-bold text-gray7e">Average Ping</p>
                    </div>
                </div>
            </div>
            <!-- counter end   -->
        </section>
        <!-- banner section end  -->

        <!-- why-discortics  start   -->
        <section class="relative overflow-hidden">
            <div class="container grid xl:grid-cols-2 gap-16">
                <div class="text-center xl:text-left">
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="450"
                        data-aos-easing="ease-in-out"
                        class="font-montserrat font-extrabold mb-4 sm:mb-8 text-3xl md:text-body42"
                        style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
                    >
                        Why Dicortics ?
                    </h2>
                    <p 
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="120"
                        data-aos-duration="300"
                     class="text-body17 capitalize font-quicksand tracking-wide">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit corrupti atque animi ratione temporibus, laborum, nostrum magnam fuga vitae unde praesentium dignissimos dolore quo totam eaque laudantium, eligendi
                        adipisci! Dolor!
                    </p>
                </div>
                <div 
                 data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-delay="100"
                data-aos-duration="260"
                class="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
                    <div class=" w-full text-center xl:text-left">
                        <span class="mb-4 inline-block">
                            <img src="/svg/clock.svg" alt="icon" />
                        </span>
                        <h2 class="font-quicksand capitalize font-bold text-graye1 sm:whitespace-nowrap">Fast & efficient</h2>
                    </div>
                    <div class=" w-full text-center xl:text-left">
                        <span class="mb-4 inline-block">
                            <img src="/svg/chain.svg" alt="icon" />
                        </span>
                        <h2 class="font-quicksand capitalize font-bold text-graye1 sm:whitespace-nowrap">Easy to Modify</h2>
                    </div>
                    <div class=" w-full text-center xl:text-left">
                        <span class="mb-4 inline-block">
                            <img src="/svg/free.svg" alt="icon" />
                        </span>
                        <h2 class="font-quicksand capitalize font-bold text-graye1 sm:whitespace-nowrap">Completely Free!</h2>
                    </div>
                    <div class=" w-full text-center xl:text-left">
                        <span class="mb-4 inline-block">
                            <img src="/svg/ok.svg" alt="icon" />
                        </span>
                        <h2 class="font-quicksand capitalize font-bold text-graye1 sm:whitespace-nowrap">Better UI</h2>
                    </div>
                    <div class=" w-full text-center xl:text-left">
                        <span class="mb-4 inline-block">
                            <img src="/svg/diamond.svg" alt="icon" />
                        </span>
                        <h2 class="font-quicksand capitalize font-bold text-graye1 sm:whitespace-nowrap">Premium Features</h2>
                    </div>
                    <div class=" w-full text-center xl:text-left">
                        <span class="mb-4 inline-block">
                            <img src="/svg/verify.svg" alt="icon" />
                        </span>
                        <h2 class="font-quicksand capitalize font-bold text-graye1 sm:whitespace-nowrap">Highly Compactable</h2>
                    </div>
                </div>
            </div>
        </section>
        <!-- why-discortics  end  -->

        <!-- Text Animation  start  -->
        <section class="text-animation relative overflow-hidden">
            <div class="relative max-w-full py-40 lg:py-80">
                <div class="bg-black24 flex items-center transform text-animation--one">
                    <marquee width="100%" direction="right" scrollamount="20">
                        <div class="flex items-center py-3">
                            <p
                                class="text-4xl md:text-body61 font-montserrat font-extrabold"
                                style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
                            >
                                Fantastic Features.
                            </p>
                            <p class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</p>
                            <p
                                class="text-4xl md:text-body61 font-montserrat font-extrabold"
                                style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
                            >
                                Fantastic Features.
                            </p>
                            <p class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</p>
                        </div>
                    </marquee>
                </div>
                <div class="bg-black24 flex items-center transform text-animation--two">
                    <marquee width="100%" direction="left" scrollamount="15">
                        <div class="flex items-center py-3">
                            <p class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</p>
                            <p
                                class="text-4xl md:text-body61 font-montserrat font-extrabold"
                                style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
                            >
                                Fantastic Features.
                            </p>
                            <p class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</p>
                            <p
                                class="text-4xl md:text-body61 font-montserrat font-extrabold"
                                style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
                            >
                                Fantastic Features.
                            </p>
                        </div>
                    </marquee>
                </div>
            </div>
        </section>
        <!-- Text Animation  end  -->

        <!-- Don't Cross this Border  -->

        <div class="py-16 lg:py-24">
            <div>
                <div class="mb-16">
                    <swiper class="swiper slider-giveaways" :options="swiperOptionOne">
                        <swiper-slide>
                            <div class="grid lg:grid-cols-2 gap-4 items-center justify-center">
                                <div class=" text-center lg:text-left">
                                    <h2 class="text-white text-4xl md:text-body47 font-montserrat font-bold mb-4 title-hedding">Applications</h2>
                                    <p class="text-white font-quicksand text-opacity-80 text-body16 font-normal">Setup & Manage Staff Applications in your server</p>
                                </div>
                                <div class="row-start-1 lg:row-start-auto">
                                    <img src="/img/slider-thumb1.png" alt="bg-img" class="mx-auto" />
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="grid lg:grid-cols-2 gap-4 items-center justify-center">
                                <div  class=" text-center lg:text-left">
                                    <h2 class="text-white text-4xl md:text-body47 font-montserrat font-bold mb-4 title-hedding">Levels</h2>
                                    <p class="text-white font-quicksand text-opacity-80 text-body16 font-normal">Highly customisable Leveling system with UI Rank Cards & Role Rewards</p>
                                </div>
                                <div class="row-start-1 lg:row-start-auto">
                                    <img src="/img/slider-thumb-two.png" alt="bg-img" class="mx-auto" />
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="grid lg:grid-cols-2 gap-4 items-center justify-center">
                                <div  class=" text-center lg:text-left">
                                    <h2 class="text-white text-4xl md:text-body47 font-montserrat font-bold mb-4 title-hedding">Economy & Games</h2>
                                    <p class="text-white font-quicksand text-opacity-80 text-body16 font-normal">Server-wise economy & engaging games such as Among Us</p>
                                </div>
                                <div class="row-start-1 lg:row-start-auto">
                                    <img src="/img/slider-thumb-three.png" alt="bg-img" class="mx-auto" />
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <!-- end -->
                </div>
                <!-- start -->
                <swiper class="swiper slider-giveaways" :options="swiperOptionTwo">
                    <swiper-slide>
                        <div class="grid lg:grid-cols-2 gap-4 items-center justify-center">
                            <div>
                                <img src="/img/slider-thumb-five.png" alt="bg-img" class="mx-auto" />
                            </div>
                            <div  class=" text-center lg:text-left">
                                <h2 class="text-white text-4xl md:text-body47 font-montserrat font-bold mb-4 title-hedding">Giveaways</h2>
                                <p class="text-white font-quicksand text-opacity-80 text-body16 font-normal">Host giveaways with various Requirements & Customised Embeds</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="grid lg:grid-cols-2 gap-4 items-center justify-center">
                            <div>
                                <img src="/img/slider-thumb-four.png" alt="bg-img" class="mx-auto" />
                            </div>
                            <div  class=" text-center lg:text-left">
                                <h2 class="text-white text-4xl md:text-body47 font-montserrat font-bold mb-4 title-hedding">Global AFK</h2>
                                <p class="text-white font-quicksand text-opacity-80 text-body16 font-normal">Global AFK System to save you from setting AFK in multiple servers</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="grid lg:grid-cols-2 gap-4 items-center justify-center">
                            <div>
                                <img src="/img/slider-thumb-three.png" alt="bg-img" class="mx-auto" />
                            </div>
                            <div  class=" text-center lg:text-left">
                                <h2 class="text-white text-4xl md:text-body47 font-montserrat font-bold mb-4 title-hedding">Notification</h2>
                                <p class="text-white font-quicksand text-opacity-80 text-body16 font-normal">
                                    Recieve notification from Youtube, Twitch, & Many More*
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <!-- end -->
            </div>
        </div>
        <!-- slider end -->

        <!-- Meet Section Start -->
        <div class="pt-16 lg:pt-24">
            <div class="container">
                <div class="mb-20 text-center max-w-screen-md m-auto">
                    <h2 
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-easing="ease-in-out"
                     class="text-green4f text-4xl md:text-body47 font-montserrat font-bold mb-4">Meet our Partners</h2>
                    <p
                         data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="120"
                        data-aos-duration="300"
                     class="tracking-wide text-grayd5 font-quicksand text-body17 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor sed tellus massa adipiscing egestas placerat. Condimentum tempor lorem eu mi pretium nunc. Porttitor sed tellus massa adipiscing egestas placerat.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12">
                            <div>
                                <div class="h-315  mb-6 md:mb-12">
                                    <img class="w-full h-full object-cover rounded-3xl" src="/img/meet1.png" alt="our-products" />
                                </div>
                                <div class="text-center">
                                    <h4 class="text-body22 text-gray22 font-bold font-montserrat mb-4">Kaztro Gaming Discord</h4>
                                    <div class="mb-5">
                                        <p class="tracking-wide text-grayd5 font-quicksand text-body17 font-normal">
                                            With more than 1 Million YT subscribers, you'll find him streaming PUBG mobile & Valorant everyday! He is known for his ace and style in gaming.
                                        </p>
                                    </div>

                                    <nuxt-link to="/" class="text-green4f text-body15 font-quicksand flex justify-center">JOIN <img class="ml-2" src="/svg/arrow.svg" alt="our-products" /></nuxt-link>
                                </div>
                            </div>
                            <div>
                                <div class="h-315  mb-6 md:mb-12">
                                    <img class="w-full h-full object-cover rounded-3xl" src="/img/meet2.png" alt="our-products" />
                                </div>
                                <div class="text-center">
                                    <h4 class="text-body22 text-gray22 font-bold font-montserrat mb-4">DiscordGift.site</h4>
                                    <div class="mb-5">
                                        <p class="tracking-wide text-grayd5 font-quicksand text-body17 font-normal">DiscordGift.site is a fake nitro link generator, design for discord users to rick roll their friends.</p>
                                    </div>

                                    <nuxt-link to="/" class="text-green4f text-body15 font-quicksand flex justify-center">JOIN <img class="ml-2" src="/svg/arrow.svg" alt="" /></nuxt-link>
                                </div>
                            </div>
                            <div>
                                <div class="text-center  lg:mt-28">
                                    <div class="mb-5">
                                        <p class="tracking-wide text-grayd5 font-quicksand text-body17 font-normal">Looking forward to partner with us? Open a ticket in the support server.</p>
                                    </div>

                                    <nuxt-link to="/" class="text-green4f text-body15 font-quicksand flex justify-center">JOIN <img class="ml-2" src="/svg/arrow.svg" alt="" /></nuxt-link>
                                </div>
                            </div>
                </div>
            </div>
        </div>
        <!--  Partner section   -->
        <section class="py-16 lg:py-24">
            <!-- Partner One  -->
            <div class="mb-6">
                <div class="auto-slider">
                    <div class="auto-slider-track">
                        <div v-for="(item, itemIndex) in partnersList " :key="itemIndex" class="auto-slider-content">
                            <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center w-full transition duration-300">
                                <div class="flex items-center">
                                    <img class="mr-4" :src="item.icon" alt="" />
                                    <h4 class="text-body17 text-grayd5 font-montserrat font-bold">{{item.title}}</h4>
                                </div>
                                <div class="flex items-center">
                                    <img class="mr-2" src="/svg/user.svg" alt="" />
                                    <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                                </div>
                            </div>
                        </div>
                        <!-- Doubled  -->
                        <div v-for="(item, itemIndex) in partnersList " :key="itemIndex" class="auto-slider-content">
                            <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center w-full transition duration-300">
                                <div class="flex items-center">
                                    <img class="mr-4" :src="item.icon" alt="" />
                                    <h4 class="text-body17 text-grayd5 font-montserrat font-bold">{{item.title}}</h4>
                                </div>
                                <div class="flex items-center">
                                    <img class="mr-2" src="/svg/user.svg" alt="" />
                                    <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Partner slider alternate  -->
            <div class="mb-6">
                <div class="auto-slider">
                    <div class="auto-slider-track auto-slider-track--alternate">
                        <div v-for="(item, itemIndex) in partnersList " :key="itemIndex" class="auto-slider-content">
                            <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center w-full transition duration-300">
                                <div class="flex items-center">
                                    <router-link to="#">
                                        <img class="mr-4" :src="item.icon" alt="" />
                                    </router-link>
                                    <h4 class="text-body17 text-grayd5 font-montserrat font-bold">{{item.title}}</h4>
                                </div>
                                <div class="flex items-center">
                                    <img class="mr-2" src="/svg/user.svg" alt="" />
                                    <h4 class="text-body15 text-gray8e font-quicksand font-normal">{{item.users}}</h4>
                                </div>
                            </div>
                        </div>
                        <!-- Doubled  -->
                        <div v-for="(item, itemIndex) in partnersList " :key="itemIndex" class="auto-slider-content">
                            <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center w-full transition duration-300">
                                <div class="flex items-center">
                                     <router-link to="#">
                                        <img class="mr-4" :src="item.icon" alt="" />
                                    </router-link>
                                    <h4 class="text-body17 text-grayd5 font-montserrat font-bold">{{item.title}}</h4>
                                </div>
                                <div class="flex items-center">
                                    <img class="mr-2" src="/svg/user.svg" alt="" />
                                    <h4 class="text-body15 text-gray8e font-quicksand font-normal">{{item.users}}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </section>

        <!-- Slider End -->

        <!-- Start Server Section -->
        <div class="bg-content bg-no-repeat bg-center bg-black24 py-16 lg:py-24 relative z-10 overflow-hidden">
            <div class="container">
                <div class="lg:grid grid-cols-12 gap-6 items-center">
                    <div class="col-span-6 2xl:pr-56 mb-8 lg:mb-0 lg:text-left text-center">
                        <h2 
                         data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="450"
                        data-aos-easing="ease-in-out"
                        class="text-green4f text-4xl sm:text-body53 font-montserrat font-normal mb-4">Build the <span class="font-bold">server</span> of your <span class="font-bold">dreams.</span></h2>
                        <p 
                          data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="120"
                        data-aos-duration="300"
                        class="text-body17 text-white text-opacity-75 font-quicksand font-medium lg:pr-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor sed tellus massa adipiscing egestas placerat. Condimentum tempor lorem eu mi pretium nunc.
                        </p>
                    </div>
                    <div class="col-span-6">
                        <div class="sm:flex flex-wrap justify-center sm:space-x-5">
                            <nuxt-link to="/" class="bg-green4f text-black24 font-bold rounded-full flex items-center justify-center text-body15 font-quicksand uppercase py-4 px-8 tracking-wider text-center mb-4 sm:mb-0">
                                DASHBOARD
                                <img class="ml-3" src="/svg/dashedboard.svg" alt="" />
                            </nuxt-link>
                            <nuxt-link to="/" class="border border-grayb5 border-opacity-80 text-gray9d font-bold rounded-full flex items-center text-body15 font-quicksand uppercase py-4 px-8 tracking-wider justify-center">
                                INVITE BOT
                                <img class="ml-3" src="/svg/plane.svg" alt="" />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="circle-layout" >
                    <div class="circle-layout--one">
                    </div>
                    <div class="circle-layout--two"></div>
                    <div class="circle-layout--three"></div>
                    <div class="circle-layout--four"></div>
                </div>
            </div>
        </div>
        <!-- End Sever -->
    </div>
</template>
<script>
    import VueJsCounter from "vue-js-counter";
    import {KinesisContainer, KinesisElement} from "vue-kinesis";

    export default {
        name: "IndexNew",
        components: {
            VueJsCounter,
            KinesisContainer,
            KinesisElement
        },
        data() {
            return {
                bgLayer: {
                    backgroundImage: `url(https://i.imgur.com/XbYc0CR.png)`,
                },

                partnersList: [
                    {
                        title: "Rythm",
                        users: "13,316",
                        icon: "https://i.imgur.com/8vcIM9l.png"
                    },
                    {
                        title: "Dank Memer",
                        users: "21,222",
                        icon: "https://i.imgur.com/Ls9nWgS.png"
                    },
                    {
                        title: "Tatsu",
                        users: "33,867",
                        icon: "https://i.imgur.com/pW63MzK.png"
                    },
                    {
                        title: "Astroz Music",
                        users: "13,316",
                        icon: "https://i.imgur.com/6SU67tY.png"
                    },
                    {
                        title: "Fred Boat",
                        users: "55,867",
                        icon: "https://i.imgur.com/67TEW8O.png"
                    },
                    {
                        title: "MEE6",
                        users: "991,967",
                        icon: "https://i.imgur.com/QtxoNZg.png"
                    },
                    {
                        title: "Toasty",
                        users: "55,867",
                        icon: "https://i.imgur.com/NIW1UOr.png"
                    },
                    {
                        title: "Dyno",
                        users: "55,867",
                        icon: "https://i.imgur.com/9rFcAqt.png"
                    },
                ],
                //   swiper One
                swiperOptionOne: {
                    slidesPerView: 1,
                    spaceBetween: 80,
                    centeredSlides: true,
                    loop:true,
                    autoplay: {
                        delay: 1600,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        1199: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    },
                },
                //   swiper two
                swiperOptionTwo: {
                    slidesPerView: 1,
                    spaceBetween: 80,
                    centeredSlides: true,
                    loop:true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: true,
                    },
                    breakpoints: {
                        1199: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    },
                },
            };
        },
    };
</script>
<style>

    /* Banner img Shaddow  */
    .banner-img::after {
        top:0;
        left:0;
        opacity: 1;
        content: ''; 
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0.26;
        position:absolute;
        filter: blur(250px);
        transform: rotate(-80.78deg);
        background: linear-gradient(83.08deg, #4FEBF9 7.34%, rgba(79, 235, 249, 0.48) 92.07%);
    }

    /* Customization Slider  */
    .slider-giveaways .swiper-slide:nth-child(2n) {
        width: 40%;
    }
    .slider-giveaways .swiper-slide:nth-child(3n) {
        width: 20%;
    }
    .swiper-slide.swiper-slide-active h2.title-hedding {
        color: #c51c75;
    }

    .swiper-slide.swiper-slide-active h2.title-hedding {
        background: linear-gradient(270deg, #c51c75 0%, #c937fb 34.65%, #ffa88e 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Animation Text roate  */
    .text-animation .text-animation--one,
    .text-animation .text-animation--two {
        position: absolute;
        top: 50%;
    }
    .text-animation .text-animation--one {
        width: 120%;
        left: 50%;
        transform: translateX(-50%) rotate(12deg);
    }
    .text-animation .text-animation--two {
        width: 120%;
        right: 50%;
        transform: translateX(50%) rotate(-12deg);
    }

    /* Circle pulse  */
    .circle-layout { 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        position: absolute;
        background-color: #242424;
    }

    .circle-layout--one { 
        width: 160px;
        height: 160px;
          -webkit-animation: pulsate 2s ease-out;

    }
    .circle-layout--two { 
        width: 340px;
        height: 340px;
        -webkit-animation: pulsate 5s  ease-out;

    }
    .circle-layout--three { 
        width: 540px;
        height: 540px;
          -webkit-animation: pulsate 12s ease-out;

    }
    .circle-layout--four { 
        width: 750px;
        height: 750px;
        -webkit-animation: pulsate 16s ease-out;

    }

    .circle-layout--one,
    .circle-layout--two,
    .circle-layout--three,
    .circle-layout--four { 
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        border: 2px solid rgba(79, 235, 249,.2);
        -webkit-animation-iteration-count: infinite;

    }

@-webkit-keyframes pulsate {
        0% {
            transform: translate(-50%, -50%)  scale(0.1, 0.1);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1.3, 1.3);
            opacity: 0;
        }
}


.auto-slider { 
    width: 100%;
    margin: auto;
    display:grid;
    height: 70px;
    overflow: hidden;
    place-items: center;
    position: relative;
}

.auto-slider-track
{ 
    display: flex;
    width: calc(355px * 16);
    animation: scrollAlternate 72.6s linear infinite;
}


.auto-slider-track--alternate { 
    display: flex;
    width: calc(355px * 16);
    animation: scroll 72.6s linear infinite;
}

@keyframes scroll { 
    0% { 
        
        transform: translateX(0);
        }
    100% { 
        transform: translateX(calc(-355px * 8));
    }
}

@keyframes scrollAlternate { 
    0% { 
        
        transform: translateX(calc(-355px * 8));
        }
    100% { 
        transform: translateX(0);
    }
}

.auto-slider-content { 
    height: 70px;
    width: 355px;
    display: flex;
    padding: 15px;
    align-items: center;
    /* perspective: 200px; */
}

/* .auto-slider-content > div:hover { 
    transform: translateZ(20px);
} */

</style>
