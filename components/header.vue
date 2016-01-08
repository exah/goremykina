<template lang="jade">
.header
  .logo(v-html='logo')
</template>

<script>
  import logo from 'assets/logo.svg';

  export default {
    data: () => ({ logo })
  }
</script>

<style lang="postcss">
  @import "/global.css";

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
