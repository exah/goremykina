<template lang="jade">

.app
  app-header
  app-nav
  router-view(
    class='view'
    keep-alive
    transition
    transition-mode='out-in')

</template>

<script>
  import './index.css';
  import AppHeader from 'components/header';
  import AppNav from 'components/nav';

  export default {
    data: () => ({
      'message': 'Goodbye world!'
    }),
    components: {
      AppHeader,
      AppNav
    }
  }
</script>
