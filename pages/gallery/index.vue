<template lang="jade">
.app-content
  v-article(v-bind:text='text')
  gallery(v-bind:arts="art")
</template>

<script>
  import vArticle from 'components/article';
  import gallery from 'components/gallery';
  import { art, anons as text } from 'assets/example_db';
  import './index.css';

  export default {
    name: 'GalleryPage',
    data: () => ({
      text,
      art,
    }),
    components: {
      vArticle,
      gallery,
    }
  }
</script>
