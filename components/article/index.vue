<template lang="jade">
  article.article(
    lang="ru"
    v-html="text | marked")
</template>

<script>
  import './index.css';

  export default {
    props: ['text']
  }
</script>
