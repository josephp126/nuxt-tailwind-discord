
<template>
  <div>
    <p class="text-white font-semibold text-center text-4xl animate-pulse">
      Redirecting you to Discord...
    </p>
  </div>
</template>


<script>
export default {
  auth: false,
  middleware: ['auth'],
  asyncData(context) {
    if (!context.$auth.loggedIn) {
      context.$auth.loginWith('discordapp')
    } else if(process.browser) {
      context.redirect('/')
    }
  },
}
</script>