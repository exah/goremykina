<template lang="jade">

  .nav(role="navigation")
    a.nav-item(
      v-link="{
        path: '/',
        activeClass:'is-active'
      }") Картины

    a.nav-item(
      v-link="{
        path: '/about',
        activeClass:'is-active'
      }") Об ирине

    span.nav-item Записи
    span.nav-item Контакты

</template>

<script>
  import './index.css';
</script>
