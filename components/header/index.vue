<template lang="jade">
  .header
    .logo(v-html='logo')
</template>

<script>
  import './index.css';
  import logo from 'assets/logo.svg';

  export default {
    data: () => ({ logo })
  }
</script>
