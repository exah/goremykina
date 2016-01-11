<template>
  <div class="photoswipe">
    <slot></slot>
    <pswp></pswp>
  </div>
</template>

<script>
  import photoSwipeInit from './photoswipe-init';
  import pswp from './pswp';

  export default {
    ready() {
      photoSwipeInit('.gallery');
    },
    components: {
      pswp,
    }
  }
</script>

<style lang="sass">
  @import '~photoswipe/dist/photoswipe.css';
  @import '~photoswipe/dist/default-skin/default-skin.css';
</style>
