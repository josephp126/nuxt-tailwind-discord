<template>
  <div class="error404 text-center">
    <div class="error-content">
      <div class="">
        <h1 class="error-number">{{error.statusCode}}</h1>
        <p class="mini-text">Ooops!</p>
        <p class="error-text mb-4 mt-1">Are you lost? Don't Worry!</p>
        <div class="p-8">
          <a
            href="/"
            class="
              bg-gradient-to-r
              hover:bg-gradient-to-tr
              w-48
              mx-auto
              from-discortics-200
              to-discortics-300
              z-10
              p-3
              rounded-md
              transition-all
              block
              duration-700
              ease-in-out
              transform
              hover:-translate-y-1
            "
            >Let's take you Home</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default() {return {statusCode: 400}},
    }
  },
}
</script>    
<style scoped src = '@/static/css/400.css' />
