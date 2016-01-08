<template lang="jade">
  .nav(role="navigation")
    a.nav-item(v-link="'/gallery'") Картины
    a.nav-item(v-link="'/about'") Об Ирине
    span.nav-item Записи
    span.nav-item Контакты
</template>

<style lang="postcss">
  @import "/global.css";

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
