<template lang="">
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus maxime quos repellat explicabo quam doloremque doloribus voluptates quis magnam! Dolor ducimus odio non dolorum, dicta reprehenderit fugiat aperiam cum delectus?
        <!-- Don't Cross this Border  -->

        <!-- Meet Section Start -->
        <div class="pt-20 lg:pt-32">
            <div class="container">
                <div class="mb-20 text-center max-w-screen-md m-auto">
                    <h2 class="text-green4f text-4xl  md:text-body47 font-montserrat font-bold mb-4">Meet our Partners</h2>
                    <p class="tracking-wide	text-grayd5 font-quicksand text-body17 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor sed tellus massa adipiscing egestas placerat. Condimentum tempor lorem eu mi pretium nunc. Porttitor sed tellus massa adipiscing egestas placerat.</p>
                </div>
                <div class="lg:grid grid-cols-12 gap-10">
                    <div class="col-span-4">
                        <div class="sm:h-315 h-full mb-12">
                            <img class="w-full h-full rounded-3xl" src="/img/meet1.png" alt="">
                        </div>
                        <div class="text-center">
                            <h4 class="text-body22 text-gray22 font-bold font-montserrat mb-4">Kaztro Gaming Discord</h4>
                            <div class="min-h-80 mb-5">
                                <p class="tracking-wide	text-grayd5 font-quicksand text-body17 font-normal">With more than 1 Million YT subscribers, you'll find him streaming PUBG mobile & Valorant everyday! He is known for his ace and style in gaming.</p>
                            </div>
                            
                            <nuxt-link to="/" class="text-green4f text-body15 font-quicksand flex justify-center">JOIN <img class="ml-2" src="/svg/arrow.svg" alt=""></nuxt-link>
                        </div>
                    </div>
                     <div class="col-span-4 my-6 lg:my-0">
                        <div class="sm:h-315 h-full mb-12">
                            <img class="w-full h-full rounded-3xl" src="/img/meet2.png" alt="">
                        </div>
                        <div class="text-center">
                            <h4 class="text-body22 text-gray22 font-bold font-montserrat mb-4">DiscordGift.site</h4>
                            <div class="min-h-80 mb-5">
                                <p class="tracking-wide	text-grayd5 font-quicksand text-body17 font-normal">DiscordGift.site is a fake nitro link generator, design for discord users to rick roll their friends.</p>
                            </div>
                            
                            <nuxt-link to="/" class="text-green4f text-body15 font-quicksand flex justify-center">JOIN <img class="ml-2" src="/svg/arrow.svg" alt=""></nuxt-link>
                        </div>
                    </div>
                     <div class="col-span-4">
                        <div class="text-center px-14 sm:px-28 lg:mt-28">
                            <div class="min-h-80 mb-5">
                                <p class="tracking-wide	text-grayd5 font-quicksand text-body17 font-normal">Looking forward to partner with us? Open a ticket in the support server.</p>
                            </div>
                            
                            <nuxt-link to="/" class="text-green4f text-body15 font-quicksand flex justify-center">JOIN <img class="ml-2" src="/svg/arrow.svg" alt=""></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Slider Start -->
        <div class="py-20 lg:py-32">
            <div class="mb-6">
            <swiper class="swiper" :options="swiperOptionOne">
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon5.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Rythm</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon6.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Dank Memer</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon7.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Tatsu</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                <div class="flex items-center">
                    <img class="mr-4" src="/svg/slider-icon8.svg" alt="">
                    <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Astroz Music</h4>
                </div>
                <div class="flex items-center">
                    <img class="mr-2" src="/svg/user.svg" alt="">
                    <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                </div>
            </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon5.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Rythm</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon6.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Dank Memer</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon7.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Tatsu</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon8.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Astroz Music</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        </div>
        <!-- End Slider One -->

        <div>
            <swiper class="swiper" :options="swiperOptionTwo">
            <swiper-slide>
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
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon2.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Dyno</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon3.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">MEE6</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                <div class="flex items-center">
                    <img class="mr-4" src="/svg/slider-icon4.svg" alt="">
                    <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Toasty</h4>
                </div>
                <div class="flex items-center">
                    <img class="mr-2" src="/svg/user.svg" alt="">
                    <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                </div>
            </div>
            </swiper-slide>
            <swiper-slide>
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
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon2.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Dyno</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-4" src="/svg/slider-icon3.svg" alt="">
                        <h4 class="text-body17 text-grayd5 font-montserrat font-bold">MEE6</h4>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2" src="/svg/user.svg" alt="">
                        <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-gray26 rounded-lg py-3 px-5 flex justify-between items-center">
                <div class="flex items-center">
                    <img class="mr-4" src="/svg/slider-icon4.svg" alt="">
                    <h4 class="text-body17 text-grayd5 font-montserrat font-bold">Toasty</h4>
                </div>
                <div class="flex items-center">
                    <img class="mr-2" src="/svg/user.svg" alt="">
                    <h4 class="text-body15 text-gray8e font-quicksand font-normal">991,967</h4>
                </div>
            </div>
            </swiper-slide>
        </swiper>
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
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css'

//   import 'swiper/css/swiper.css'

  export default {
    name: 'IndexNew',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
           //   swiper two
        swiperOptionOne: {
          slidesPerView: 5,
          spaceBetween: 25,
          loop: true,
            autoplay: {
                delay: 300,
                disableOnInteraction: false
            },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1400: {
              slidesPerView: 5,
            },
            1199: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            }
          }
        },
        //   swiper two
        swiperOptionTwo: {
          slidesPerView: 5,
          spaceBetween: 25,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1400: {
              slidesPerView: 5,
            },
            1199: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            }
          }
        }
      }
    }
  }

</script>
<style lang="">
    
</style>