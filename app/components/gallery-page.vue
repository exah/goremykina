<template>
  <div class="app-content">
    <v-article :text="text"></v-article>
    <gallery :arts="art"></gallery>
  </div>
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

<style lang="sass">
  @import '~styles/variables';

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
