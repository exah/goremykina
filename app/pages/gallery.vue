<template lang="jade">
  .app-content
    v-article(v-bind:text='text')
    gallery(v-bind:arts="art")
</template>

<script>
  import vArticle from 'components/article';
  import gallery from 'components/gallery';
  import { art, anons as text } from 'assets/example_db';

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

<style lang="postcss">
  @import "/global.css";

  .gallery {
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;

    max-width: 100%;
    margin: 60px 0;

    @media (max-width: $bp-mobile) {
      justify-content: center;
    }
  }

</style>
