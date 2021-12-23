<template lang="">
    <div>
        <!-- banner section start  -->
        <section class="relative bg-top bg-cover bg-no-repeat pt-40 overflow-hidden ">
            <div class="container grid grid-cols-1 xl:grid-cols-7  items-center">
                <!-- Information  -->
                <div class="xl:col-span-3 xl:max-w-xl text-center xl:text-left overflow-hidden">
                    <h2
                     data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="450"
                    data-aos-easing="ease-in-out"
                    class="font-grifter text-4xl lg:text-body55 bg-clip-text text-transparent bg-frontText font-bold mb-4 lg:mb-8">Welcome to Discortics</h2>
                    <p
                    data-aos="fade-left"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="160"
                    data-aos-duration="1000"
                     class="text-body17 capitalize font-quicksand font-normal mb-8">
                        Ready to take your server to the next level? Enhance your community, let it grow to its potential. Get started by inviting and prepared to be amazed!
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center xl:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <nuxt-link to="/dashboard" class="bg-green4f text-black24 font-bold rounded-full flex items-center justify-center text-body15 font-quicksand uppercase py-5 px-8 tracking-wider text-center w-full sm:w-auto">
                            DASHBOARD
                            <img class="ml-3" src="/svg/dashboard-btn.svg" alt="" />
                        </nuxt-link>
                        <nuxt-link to="#" class="border border-grayb5 border-opacity-80 text-gray9d font-bold rounded-full flex items-center text-body15 font-quicksand uppercase py-5 px-8 tracking-wider justify-center w-full sm:w-auto">
                            INVITE BOT
                            <img class="ml-3" src="/svg/plane.svg" alt="" />
                        </nuxt-link>
                    </div>
                </div>
                <div class=" xl:col-start-4  row-start-1 xl:row-start-auto">
                    <div class="relative banner-img z-10  mb-12 xl:mb-0">
                        <kinesis-container class="" >
                            <kinesis-element :strength="3" :maxX="70" type="depth">
                                  <img src="/img/bg-dashboard.png" alt="background-layer" class=" max-w-full  md:max-w-lg  xl:max-w-4xl mx-auto "/>
                            </kinesis-element>
                        </kinesis-container>
                    </div>
                </div>
            </div>

            <!-- counter start   -->
            <div class=" py-16 sm:py-36 lg:pt-24 xl:pb-72">
                <div class="container grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
                    <div data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="450"
                        data-aos-easing="ease-in-out" class="pb-4 border-b-2 border-gray7e text-center sm:text-left">
                        <h6 class="font-grifter font-bold text-body48 text-gray7e flex items-center justify-center sm:justify-start uppercase">
                            <VueJsCounter start="0" end="23" duration="1800" class="font-grifter font-bold text-body48 text-gray7e" />
                            K
                        </h6>
                        <p class="text-base capitalize font-montserrat font-bold text-gray7e">Dependent Servers</p>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="450"
                        data-aos-easing="ease-in-out" class="pb-4 border-b-2 border-gray7e text-center sm:text-left">
                        <h6 class="font-grifter font-bold text-body48 text-gray7e flex items-center justify-center sm:justify-start uppercase">
                            <VueJsCounter start="0" end="8" duration="1800" class="font-grifter font-bold text-body48 text-gray7e" />
                            M+
                        </h6>
                        <p class="text-base capitalize font-montserrat font-bold text-gray7e">Happy Users</p>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="450"
                        data-aos-easing="ease-in-out" class="pb-4 border-b-2 border-gray7e text-center sm:text-left">
                        <h6 class="font-grifter font-bold text-body48 text-gray7e flex items-center justify-center sm:justify-start uppercase">
                            <VueJsCounter start="0" end="200" duration="1800" class="font-grifter font-bold text-body48 text-gray7e" />
                            +
                        </h6>
                        <p class="text-base capitalize font-montserrat font-bold text-gray7e">Available Commands</p>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="450"
                        data-aos-easing="ease-in-out" class="pb-4 border-b-2 border-gray7e text-center sm:text-left">
                        <h6 class="font-grifter font-bold text-body48 text-gray7e flex items-center justify-center sm:justify-start uppercase">
                            <VueJsCounter start="0" end="20" duration="1800" class="font-grifter font-bold text-body48 text-gray7e" />
                        </h6>
                        <p class="text-base capitalize font-montserrat font-bold text-gray7e">Average Ping</p>
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
                        class="font-grifter font-extrabold mb-4 sm:mb-8 text-3xl md:text-body42 bg-clip-text text-transparent bg-frontText"
                    >
                        Why Discortics ?
                    </h2>
                    <p 
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="120"
                        data-aos-duration="300"
                     class="text-body17 capitalize font-quicksand tracking-wide">
                        Discortics is your prime alternatives to bots for a better Discord. You get to implement with the easy to setup, commands user friendly, and adorable Discortics. Enhance your server theme as per your needs. Aesthetic? Gaming? Futuristic? You name it!
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
                        <h2 class="font-quicksand capitalize font-bold text-graye1 sm:whitespace-nowrap">Secure & Trusted</h2>
                    </div>
                    <div class=" w-full text-center xl:text-left">
                        <span class="mb-4 inline-block">
                            <img src="/svg/verify.svg" alt="icon" />
                        </span>
                        <h2 class="font-quicksand capitalize font-bold text-graye1 sm:whitespace-nowrap">Faster Support</h2>
                    </div>
                </div>
            </div>
        </section>
        <!-- why-discortics  end  -->

    <!-- Text Animation  start  -->
        <FeatureAnimation/> 
    <!-- Text Animation  end  -->

        <!-- Don't Cross this Border  -->

        <div class="py-16 lg:py-24">
            <div>
                <div class="mb-16">
                    <swiper class="swiper slider-giveaways" :options="swiperOptionOne">
                        <swiper-slide>
                            <div class="grid lg:grid-cols-2 gap-4 items-center justify-center">
                                <div class=" text-center lg:text-left">
                                    <h2 class="text-white text-4xl md:text-body47 font-grifter font-bold mb-4 title-hedding">Applications</h2>
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
                                    <h2 class="text-white text-4xl md:text-body47 font-grifter font-bold mb-4 title-hedding">Levels</h2>
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
                                    <h2 class="text-white text-4xl md:text-body47 font-grifter font-bold mb-4 title-hedding">Economy & Games</h2>
                                    <p class="text-white font-quicksand text-opacity-80 text-body16 font-normal">Server-wise economy & engaging games such as Among Us</p>
                                </div>
                                <div class="row-start-1 lg:row-start-auto">
                                    <img src="/img/slider-thumb1.png" alt="bg-img" class="mx-auto" />
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
                                <h2 class="text-white text-4xl md:text-body47 font-grifter font-bold mb-4 title-hedding">Giveaways</h2>
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
                                <h2 class="text-white text-4xl md:text-body47 font-grifter font-bold mb-4 title-hedding">Global AFK</h2>
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
                                <h2 class="text-white text-4xl md:text-body47 font-grifter font-bold mb-4 title-hedding">Notification</h2>
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
                <div class="mb-16 text-center max-w-screen-md m-auto">
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
                        The organisations/servers partnered with Discortics™
                    </p>
                </div>

                <div class="swiper grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12">
                            <div>
                                <div class="h-315  mb-6 md:mb-12">
                                    <img class="w-full h-full object-cover rounded-3xl" src="/img/meet3.png" alt="our-products" />
                                </div>
                                <div class="text-center">
                                    <h4 class="text-body22 text-gray22 font-bold font-montserrat mb-4">Madsen Hosting</h4>
                                    <div class="mb-5">
                                        <p class="tracking-wide text-grayd5 font-quicksand text-body17 font-normal">
                                            Providing both free and paid plans, they provide the best hosting service out there. We recommend them if you're looking for cheap lag-free hosting providers.
                                        </p>
                                    </div>

                                    <a href="https://billing.nmadsen.dk/aff.php?aff=49" target="_blank" class="text-green4f text-body15 font-quicksand flex justify-center">GRAB A DEAL <img class="ml-2" src="/svg/arrow.svg" alt="our-products" /></a>
                                </div>
                            </div>
                            <div>
                                <div class="h-315  mb-6 md:mb-12">
                                    <img class="w-full h-full object-cover rounded-3xl" src="/img/meet1.jpg" alt="our-products" />
                                </div>
                                <div class="text-center">
                                    <h4 class="text-body22 text-gray22 font-bold font-montserrat mb-4">Kaztro Gaming Discord</h4>
                                    <div class="mb-5">
                                        <p class="tracking-wide text-grayd5 font-quicksand text-body17 font-normal">
                                            With more than 1 Million YT subscribers, you'll find him streaming PUBG mobile & Valorant everyday! He is known for his ace and style in gaming.
                                        </p>
                                    </div>

                                    <a href="https://discord.gg/hJ8YKYNegC" target="_blank" class="text-green4f text-body15 font-quicksand flex justify-center">JOIN <img class="ml-2" src="/svg/arrow.svg" alt="our-products" /></a>
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

                                    <a href="https://discordgift.site/" target="_blank" class="text-green4f text-body15 font-quicksand flex justify-center">Rickroll Your Friends <img class="ml-2" src="/svg/arrow.svg" alt="" /></a>
                                </div>
                            </div>
                </div>
            </div>
        </div>
        <!--  Partner section   -->
               <section class="py-16 lg:py-24">
        <!-- Partner One  -->
        <div class="mb-6">
            <div class="mb-10 text-center max-w-screen-md m-auto">
                <p
                     data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="120"
                    data-aos-duration="300"
                 class="tracking-wide text-grayd5 font-quicksand text-body22 font-normal">
                    They <b>use</b> Discortics™
                </p>
            </div>
            <div class="auto-slider">
                <div class="auto-slider-track">
                    <div v-for="(item, itemIndex) in partnersList " :key="itemIndex" class="auto-slider-content">
                        <div class="bg-gray26 py-3 px-5 pr-7 flex justify-between items-center w-350 transition duration-300 rounded-xl">
                            <div class="flex items-center">
                                <img class="rounded-full w-12" :src="item.icon" alt="" />
                                <SVGPartnered v-if="item.partnered"/>
                                <SVGVerified v-else-if="item.verified"/>
                                <h4 class="ml-3 text-body15 text-grayd5 font-quicksand font-bold">{{item.name}}</h4>
                            </div>
                            <div class="flex items-center">
                                <img class="mr-2" src="/svg/user.svg" alt="" />
                                <h4 class="text-body15 text-gray8e font-quicksand font-normal">{{item.members}}</h4>
                            </div>
                        </div>
                    </div>
                    <!-- Doubled  -->
                    <div v-for="(item, itemIndex) in partnersList" :key="itemIndex" class="auto-slider-content">
                        <div class="bg-gray26 py-3 px-5 pr-7 flex justify-between items-center w-350 transition duration-300 rounded-xl">
                            <div class="flex items-center">
                                <img class="rounded-full w-12" :src="item.icon" alt="" />
                                <SVGPartnered v-if="item.partnered"/>
                                <SVGVerified v-else-if="item.verified"/>
                                <h4 class="ml-3 text-body15 text-grayd5 font-quicksand font-bold">{{item.name}}</h4>
                            </div>
                            <div class="flex items-center">
                                <img class="mr-2" src="/svg/user.svg" alt="" />
                                <h4 class="text-body15 text-gray8e font-quicksand font-normal">{{item.members}}</h4>
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
                    <div v-for="(item, itemIndex) in partnersList2" :key="itemIndex" class="auto-slider-content">
                        <div class="bg-gray26 py-3 px-5 pr-7 flex justify-between items-center w-350 transition duration-300 rounded-xl">
                            <div class="flex items-center">
                                    <img class="rounded-full w-12" :src="item.icon" alt="" />
                                    <SVGPartnered v-if="item.partnered"/>
                                    <SVGVerified v-else-if="item.verified"/>
                                <h4 class="ml-3 text-body15 text-grayd5 font-quicksand font-bold">{{item.name}}</h4>
                            </div>
                            <div class="flex items-center">
                                <img class="mr-2" src="/svg/user.svg" alt="" />
                                <h4 class="text-body15 text-gray8e font-quicksand font-normal">{{item.members}}</h4>
                            </div>
                        </div>
                    </div>
                    <!-- Doubled  -->
                    <div v-for="(item, itemIndex) in partnersList2 " :key="itemIndex" class="auto-slider-content">
                        <div class="bg-gray26 py-3 px-5 pr-7 flex justify-between items-center w-350 transition duration-300 rounded-xl">
                            <div class="flex items-center">
                                    <img class="rounded-full w-12" :src="item.icon" alt="" />
                                    <SVGPartnered v-if="item.partnered"/>
                                    <SVGVerified v-else-if="item.verified"/>
                                <h4 class="ml-3 text-body15 text-grayd5 font-quicksand font-bold">{{item.name}}</h4>
                            </div>
                            <div class="flex items-center">
                                <img class="mr-2" src="/svg/user.svg" alt="" />
                                <h4 class="text-body15 text-gray8e font-quicksand font-normal">{{item.members}}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <!-- Slider End -->

        <!-- Start Server Section -->
            <ServerContact/>
        <!-- End Sever -->
    </div>
</template>
<script>
    import VueJsCounter from "vue-js-counter";
    import {KinesisContainer, KinesisElement} from "vue-kinesis";
    import FeatureAnimation from "~/components/FeatureAnimation.vue";
    import ServerContact from "~/components/ServerContact.vue";
    export default {
        name: "IndexNew",
        components: {
            VueJsCounter,
            KinesisContainer,
            KinesisElement,
            FeatureAnimation,
            ServerContact
        },
        data() {
            return {
                LmS: null,

                partnersList: [
                    {
                        "name": "IMX Bears",
                        "members": 38000,
                        "verified": false,
                        "partnered": false,
                        "icon": "https://cdn.discordapp.com/icons/897019585881059330/a_625c1f176a97af93868921ac242e0694.gif"
                      },
                      {
                        "name": "Metasaurs by Dr. DMT",
                        "members": 150000,
                        "verified": false,
                        "partnered": false,
                        "icon": "https://cdn.discordapp.com/icons/887564447588159530/3168442f508ee19dfc4dbbb3baaf03b8.webp"
                      },
                      {
                        "name": "danDAN",
                        "members": 10000,
                        "verified": false,
                        "partnered": true,
                        "icon": "https://cdn.discordapp.com/icons/707633644046647409/a_8c8ba77070c81dd5420e1402076c9c7b.gif"
                      },
                      {
                        "name": "Genshin Impact Unofficial",
                        "members": 200000,
                        "verified": false,
                        "partnered": false,
                        "icon": "https://cdn.discordapp.com/icons/669895631757639682/4a95d55a0a1fbe09c8a046ec0ad7675f.webp"
                      },
                      {
                        "name": "Official Nebulous",
                        "members": 25000,
                        "verified": true,
                        "partnered": false,
                        "icon": "https://cdn.discordapp.com/icons/373950345153609729/a_cbc301fa8ce3ac948974b1ef86269ecc.gif"
                      },
                      {                 
                        "name": "Garena Free Fire Europe 🌍",
                        "members": 52000,
                        "verified": true,
                        "partnered": false,
                        "icon": "https://cdn.discordapp.com/icons/781092341658157066/766c47bd5fe3e83daa3066e56065256c.webp"
                      },
                      {
                        "name": "Big Time",
                        "members": 320000,
                        "verified": true,
                        "partnered": false,
                        "icon": "https://cdn.discordapp.com/icons/666344617536520207/ab7b397a8a5fe55efae5d8cbd863771e.webp"
                      },
                      {
                        "name": "BAGISTREAM",
                        "members": 28000,
                        "verified": false,
                        "partnered": true,
                        "icon": "https://cdn.discordapp.com/icons/315246139601453066/a_f6a1974e01222277f4598aee9f1a1e10.gif"
                      },
                ],
                partnersList2: [
                      {
                        "name": "DeeterPlays",
                        "members": 28000,
                        "verified": false,
                        "partnered": true,
                        "icon": "https://cdn.discordapp.com/icons/273525914187333637/a_4f04a9d91ce0f0da3eb1f1200f0df1dc.gif"
                      },
                      {
                        "name": "StudyWithMe",
                        "members": 40000,
                        "verified": false,
                        "partnered": true,
                        "icon": "https://cdn.discordapp.com/icons/770814980194959360/18b5447571f1b2a079727a35322ac869.webp"
                      },
                      {
                        "name": "ZOMG's Giveaways and Trading",
                        "members": 174000,
                        "verified": false,
                        "partnered": false,
                        "icon": "https://cdn.discordapp.com/icons/552330042034749443/545bd0f962a8b41e8a8bbee0846c4641.webp"
                      },
                      {
                        "name": "Anime and Manga Club",
                        "members": 8100,
                        "verified": false,
                        "partnered": true,
                        "icon": "https://cdn.discordapp.com/icons/221789407143788544/89540b2fb47903c22ebfa1ace81ffb1a.webp"
                      },
                      {
                        "name": "Garena Free Fire North America",
                        "members": 28000,
                        "verified": true,
                        "partnered": false,
                        "icon": "https://cdn.discordapp.com/icons/699907693758120017/06f124972eb65de2c8eb5b5ee0fcadf1.webp"
                      },
                      {
                        "name": "The Camp | Social",
                        "members": 66000,
                        "verified": false,
                        "partnered": false,
                        "icon": "https://cdn.discordapp.com/icons/802435727983771649/a_e3b51e667fcf01b996e96722e4a34909.gif"
                      },
                      {
                        "name": "ChargeQ Esports",
                        "members": 55000,
                        "verified": false,
                        "partnered": true,
                        "icon": "https://cdn.discordapp.com/icons/568324577890140171/a_94369cf5200c9bfb0ec693618a642e47.gif"
                      },
                      {
                        "name": "Anime Pirates",
                        "members": 87000,
                        "verified": false,
                        "partnered": false,
                        "icon": "https://cdn.discordapp.com/icons/440601479703691264/a_b6dc3da8d6a2f1d5843d0475ce09e8a6.gif"
                      },
                ],
                //   swiper One
                swiperOptionOne: {
                    spaceBetween: 80,
                    centeredSlides: true,
                    slidesPerView: "auto",
                    freeMode: true,
                    mousewheel: {
                        releaseOnEdges: true,
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
                    spaceBetween: 80,
                    centeredSlides: true,
                    slidesPerView: "auto",
                    freeMode: true,
                    mousewheel: {
                        releaseOnEdges: true,
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
        top:-60px;
        left:60px;
        content: ''; 
        z-index: -1;
        width: 300%;
        height: 105%;
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
