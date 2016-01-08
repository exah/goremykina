<template lang="jade">
.gallery
  v-art(
    v-for='art in arts'
    v-bind:tmb='art.tmb'
    v-bind:name='art.name'
    v-bind:src='art.src'
  )
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
