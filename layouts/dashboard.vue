
<template>
  <div
    class="
      flex flex-col
      min-h-screen
      font-quicksand
      tracking-wide
      bg-discortics-100
      text-white
    "
  >
    <LayoutSidebar :title="$nuxt.$route.path.split('/').reverse()[0]" />
    <main class="flex-1 w-full max-w-9xl p-4 mx-auto md:px-8 md:py-16 mt-5">
      <div id="content" class="pt-10">
        <div class="px-2">
          <div class="pt-2">
            <div class="p-2">
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
      <LayoutFab :NavList="Navigation" />
    </main>
  </div>
</template>
<script>
import Navigation from '@/data/SideBarNav'
export default {
  auth: true,
  data() {
    const currentRoute = this.$route.path.split('/').reverse()[0]
    return {
      Navigation: Navigation.find(x => x.routes.some(y => y.key === currentRoute)).routes.map(x => ({name: x.name, route: x.route, icon: x.routeIcon, key: x.key})),
    }
  },
}
</script>
