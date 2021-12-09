<template lang="">
        <section class=" text-animation-content relative overflow-hidden pt-36 md:py-60 pb-60 md:pb-96">
            <div class="text-animation text-animation--one">
                <div>
                     <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">  Fantastic Features.</span>
                    <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</span>
                     <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">  Fantastic Features.</span>
                    <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</span>
                </div>
                <div>
                     <span
                        class="text-4xl md:text-body61 font-montserrat font-extrabold"
                        style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                Fantastic Features.
                    </span>
                            <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</span>
                     <span
                        class="text-4xl md:text-body61 font-montserrat font-extrabold"
                        style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                Fantastic Features.
                            </span>
                    <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</span>
                </div>
            </div>
            <div class="text-animation text-animation--two">
                <div>
                     <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">  Fantastic Features.</span>
                    <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</span>
                     <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">  Fantastic Features.</span>
                    <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</span>
                </div>
                <div>
                     <span
                        class="text-4xl md:text-body61 font-montserrat font-extrabold"
                        style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                Fantastic Features.
                    </span>
                            <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</span>
                     <span
                        class="text-4xl md:text-body61 font-montserrat font-extrabold"
                        style="background: linear-gradient(83.08deg, #4febf9 7.34%, rgba(79, 235, 249, 0.48) 92.07%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                Fantastic Features.
                            </span>
                    <span class="text-4xl md:text-body61 font-montserrat font-extrabold" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-text-stroke: 1px #4febf9;">Fantastic Features.</span>
                </div>
            </div>
           
        </section>
</template>
<script>
        export default {
            name: 'FeatureAnimation'
        }
</script>
<style >
    /* Text Animation scroll  */
.text-animation-content { 
    position: relative;
}
.text-animation { 
  width: 100%;
  display:flex;
  position: absolute;
  top: 50%;
}
.text-animation div  {
    display: flex;
    align-items: center;
    padding: 16px 0px;
    white-space: nowrap;
    background: #242424;
    animation: animate 40s linear infinite;
    animation-delay: -40s;
}

.text-animation div:nth-child(2) {
    animation: animate2 40s linear infinite;
    animation-delay: -20s;
}

@keyframes animate {
    0% { 
        transform: translateX(100%);
    } 100% { 
        transform: translateX(-100%);
    }
}

@keyframes animate2 {
    0% { 
        transform: translateX(0);
    } 100% { 
        transform: translateX(-200%);
    }
}



.text-animation--one { 
    left: 50%;
    transform: translateX(-50%) rotate(12deg);
}
.text-animation--two { 
    right: 50%;
    transform: translateX(50%) rotate(-12deg);
}

</style>