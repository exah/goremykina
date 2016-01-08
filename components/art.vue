<template lang="jade">
.art
  a(href='{{src}}' target="_blank")
    img.art-image(
      v-bind:src="tmb['1x']"
      v-bind:srcset="tmb['2x']+' 2x'"
      alt="{{name}}")
</template>

<script>
  export default {
    props: ['src', 'name', 'tmb']
  }
</script>

<style lang="postcss">
  @import "/global.css";

  .art {
    margin: 1.5em;
    /*opacity: 0;
    transform: translateY(-10px);*/

    &-image {
      object-fit: contain;
      width: 100%;
    }
  }
</style>
