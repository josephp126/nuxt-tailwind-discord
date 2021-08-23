
<template>
  <div class="flex flex-col min-h-screen font-quicksand tracking-wide bg-discortics-100 text-white">
    <LayoutSidebar :title="$nuxt.$route.path.split('/').reverse()[0]" />
    <main class="flex-1 w-full max-w-9xl p-4 mx-auto md:px-8 md:py-16 mt-5">
      <Nuxt />
    </main>
  </div>
</template>
