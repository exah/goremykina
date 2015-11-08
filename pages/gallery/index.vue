<template lang="jade">
  .app-content
    v-article(v-bind:text='text')
    .gallery
      v-art(
        v-for='a in art'
        v-bind:tmb='a.tmb'
        v-bind:name='a.name'
        v-bind:src='a.src'
      )
</template>

<script>
  import vArticle from 'components/article';
  import vArt from 'components/art';
  import { art, anons as text } from 'assets/example_db';
  import './index.css';

  export default {
   data: () => ({
     text,
     art,
   }),
   components: {
    vArticle,
    vArt,
   }
  }
</script>
