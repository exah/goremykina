<template>
  <div class="app-content about">
    <v-article
      :text="text"
      :style="styles"
    ></v-article>
  </div>
</template>

<script>
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

<style lang="sass">
  .about .article {
    img {
      max-width: 200px;
      position: absolute;
      left: 0;
      top: -.5em;
      z-index: -1;
    }
  }
</style>
