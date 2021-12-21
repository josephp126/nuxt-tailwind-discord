<script>
import Navigation from '@/data/Navigation'
import HeaderNew from '~/components/Layout/HeaderNew.vue'
import FooterNew from '~/components/Layout/FooterNew.vue';
export default {
    components: { HeaderNew, FooterNew },
    data() {
        return {
            Navigation
        };
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "My custom description",
                },
            ],
        };
    }
}
</script>

<template>
  <div class="flex flex-col min-h-screen font-quicksand tracking-wide bg-discortics-100 text-white">
    <HeaderNew />
    <main class = "flex-1 bg-defaultBack bg-repeat-round">
      <Nuxt />
    </main>
    <FooterNew/>
  </div>
</template>
