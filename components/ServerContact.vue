<template lang="">
        <section class="bg-content bg-no-repeat bg-center bg-black24 py-16 lg:py-24 relative z-10 overflow-hidden">
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
        </section>
</template>
<script>
export default {
    name: 'ServerContact'
}
</script>
<style>
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

    .circle-layout--one,
    .circle-layout--two,
    .circle-layout--three,
    .circle-layout--four { 
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        border: 2px solid rgba(79, 235, 249,.2);
        animation: pulsate 6s ease-in-out;
        -webkit-animation: pulsate 6s ease-in-out;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
    }

    .circle-layout--one { 
        width: 160px;
        height: 160px;
        animation-delay: 0.8s;
    }
    .circle-layout--two { 
        width: 340px;
        height: 340px;
        animation-delay: 0.6s;
    }
    .circle-layout--three { 
        width: 540px;
        height: 540px;
        animation-delay: 0.4s;
    }
    .circle-layout--four { 
        width: 750px;
        height: 750px;
        animation-delay: 0.2s;
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

</style>