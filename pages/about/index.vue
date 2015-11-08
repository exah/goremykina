<template lang="jade">
  .app-content.about
    article-component(v-bind:text='text' v-bind:style='styles')
</template>

<script>
  import './index.css';
  import articleComponent from 'components/article';
  import { about } from '../../assets/example_db';

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
    articleComponent
   }
  }
</script>
