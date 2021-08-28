
<template>
<div>
  <p class = "text-white font-semibold text-center text-4xl animate-pulse">Redirecting you to the Documentation...</p>
</div>
</template>

<script>
import Constants from '@/data/Constants'
export default {
  mounted () {
         setTimeout(function(){
        window.location.href = `${Constants.Documentation}`
         }, 3000)
  }
}
</script>