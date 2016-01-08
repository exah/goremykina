<template>
  <div class="app">
    <app-header></app-header>
    <app-nav></app-nav>
    <router-view
      class="view"
      transition
      transition-mode="out-in"
    ></router-view>
  </div>
</template>

<script>
  import AppHeader from 'components/header';
  import AppNav from 'components/nav';

  export default {
    components: {
      AppHeader,
      AppNav
    }
  }
</script>

<style lang="sass">
  @import '~styles/variables';

  .app {
    padding: 0 2.5%;

    &-content {
      padding-top: 35px;

      @media (max-width: $bp-mobile) {
        padding-top: 30px;
      }
    }
  }

  .logo {
    width: 70px;
    transition: all .2s;

    svg {
      width: 100%;
    }
  }

  .view {
    transition: opacity .2s ease;

    &.transition-enter, &.transition-leave {
      opacity: 0;
    }
  }
</style>
