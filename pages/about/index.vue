<template lang="jade">
.app-content.about
  v-article(v-bind:text='text' v-bind:style='styles')
</template>

<script>
  import './index.css';
  import vArticle from 'components/article';
  import { about } from 'assets/example_db';

  export default {
   data: () => ({
     styles: {
      textAlign: 'left',
      paddingLeft: 'calc(250px - 0.7em)',
      maxWidth: '650px'
     },
     text: about,
   }),
   components: {
    vArticle
   }
  }
</script>
