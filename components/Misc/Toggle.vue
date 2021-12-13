<template>
    <div :class = "`cursor-pointer relative transition duration-300 ease-in-out w-12 h-8 ${toggled ? 'bg-purple-700 bg-navCurrent' : 'bg-gray-400 bg-none'} rounded-full`" @click="toggle" >
        <div :class = "`p-px flex justify-center items-center transition duration-300 ease-in-out transform absolute w-5 h-5 rounded-full ${toggled ? 'translate-x-5 bg-white' : 'translate-x-0 bg-gray-300'} left-1 top-1 bottom-1 my-auto`">
         <div :class = "`bg-discortics-100 w-3 h-3 rounded-full mx-auto my-auto ${toggled ? 'visible' : 'invisible'}`" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        enabled: {
            type: Boolean,
            default() {return false}
        }
    },
    data() {
        return {
            toggled: this.enabled
        }
    },
    methods: {
        toggle() {
            this.toggled = !this.toggled
        },
        toggleOn() {
            this.toggled = true
        },
        toggleOff() {
            this.toggled = false
        },
        getState() {
            return this.toggled
        }
    }

}
</script>