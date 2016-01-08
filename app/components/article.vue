<template lang="jade">
article.article(
  lang="ru"
  v-html="text | marked")
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style lang="postcss">
  .article {
    position: relative;
    text-align: center;
    margin: 0 auto;
    max-width: 500px;
    line-height: 1.6em;
    hyphens: auto;

    > p:first-of-type {
      font-size: 1.1em;
      padding-left: 0;
    }
  }
</style>
