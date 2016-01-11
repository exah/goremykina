<template>
  <photo-swipe>
    <div class="gallery">
      <v-art
        v-for='art in arts'
        v-if="$index < artLimit"
        :tmb='art.tmb'
        :name='art.name'
        :src='art.src'
        :size='art.size'
        transition='art'
      ></v-art>
    </div>
  </photo-swipe>
</template>

<script>
  import vArt from 'components/art';
  import PhotoSwipe from 'components/photoswipe';

  export default {
    props: ['arts'],
    components: {
      vArt,
      PhotoSwipe,
    },
    data: () => ({
      artLimit: Infinity,
    }),
  }
</script>

<style lang="sass">
  .art-transition {
    opacity: 1;
    transform: scale(1);
    transition: all .4s .2s;
  }

  .art-enter, .art-leave {
    opacity: 0;
    transform: scale(0);
  }
</style>
