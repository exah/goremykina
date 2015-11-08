<template>

  <nav class="nav" role="navigation">
    <a
      v-link="{
        path: '/',
        activeClass:'is-active'
      }"
      class="nav-item">Картины</a>

    <a
      v-link="{
        path: '/about',
        activeClass:'is-active'
      }"
      class="nav-item">Об Ирине</a>
    <span class="nav-item">Записи</span>
    <span class="nav-item">Контакты</span>
  </nav>

</template>

<script>
  import './index.css';
</script>
