<template>
  <div class="gallery">
    <v-art
      v-for='art in arts'
      :tmb='art.tmb'
      :name='art.name'
      :src='art.src'
      transition='art'
      stagger='100'
    ></v-art>
  </div>
</template>

<script>
  import vArt from 'components/art';

  export default {
    props: ['arts'],
    components: {
      vArt,
    }
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
