<template>
  <div class="header">
    <a v-link="'/'">
      <div class="logo" v-html="logo"></div>
    </a>
  </div>
</template>

<script>
  import logo from 'assets/logo.svg';

  export default {
    data: () => ({ logo })
  }
</script>

<style lang="sass">
  @import '~styles/variables';

  .header {
    position: fixed;
    top: 3em;
    left: 3em;
    z-index: 10;

    @media (max-width: $bp-mobile) {
      position: static;
      text-align: center;
      width: 90px;
      margin: 30px auto 0;

      .logo {
        width: 100%;
      }
    }
  }
</style>
