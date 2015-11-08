<template lang="jade">
  .nav(role="navigation")
    a.nav-item(v-link="'/gallery'") Картины
    a.nav-item(v-link="'/about'") Об Ирине
    span.nav-item Записи
    span.nav-item Контакты
</template>

<script>
  import './index.css';
</script>
