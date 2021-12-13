
<template> 
            <label class = "w-full max-w-md relative">
                <div class = "absolute left-2 inset-y-0 flex flex-col justify-center text-gray-500">
                    <button @click = "resetQuery">
                    <SVGSearch v-if = "!isitFocused()" size = "24" />
                    <SVGCross v-if = "isitFocused()" size = "24" />
                    </button>
                </div>
            <input type = "text" v-model = "query" class = "bg-discortics-header h-12 w-full placeholder-gray-500 px-4 pl-12 rounded-xl" placeholder = "Search..."/>
            </label>
</template>

<script>
export default {
    data() {
        return {
            focused: false,
            query: "",
        }
    },
    methods: {
        isitFocused() {
            if(this.query.length > 0) return true;
            return false;
        },
        resetQuery() {
            this.query = ""
        }
    }
}
</script> 