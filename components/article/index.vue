<template lang="jade">
  article.article(
    lang="ru"
    v-html="text | marked")
</template>

<script>
  import marked from 'marked'  ;
  import './index.css';

  const renderMd = (text) => marked(text, { sanitize: true });

  export default {
    props: {
      text: String,
    },
    filters: {
      marked: marked
    }
  }

</script>
