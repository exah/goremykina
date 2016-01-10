<template>
  <div class="nav" role="navigation">
    <a class="nav-item" v-link="{ name: 'gallery' }">Картины</a>
    <a class="nav-item" v-link="{ name: 'about' }">Об Ирине</a>
    <span class="nav-item">Записи</span>
    <span class="nav-item">Контакты</span>
  </div>
</template>

<style lang="sass">
  @import '~assets/styles/variables';

  .nav {
    position: fixed;
    top: 3em;
    right: 3em;
    z-index: 10;
    text-align: left;

    @media (max-width: $bp-mobile) {
      position: static;
      text-align: center;
      margin-top: 30px;
    }

    &-item {
      display: block;
      & + & {
        margin-top: .25em;
      }

      &.is-active {
        opacity: .5;
      }

      @media (max-width: $bp-mobile) {
        display: inline;

        & + &:before {
          content: " / ";
        }
      }
    }
  }
</style>
