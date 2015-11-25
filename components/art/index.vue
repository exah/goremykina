<template lang="jade">
.art
  a(href='{{src}}' target="_blank")
    img.art-image(
      v-bind:src="tmb['1x']"
      v-bind:srcset="tmb['2x']+' 2x'"
      alt="{{name}}")
</template>

<script>
  import './index.css';

  export default {
    props: ['src', 'name', 'tmb']
  }
</script>
