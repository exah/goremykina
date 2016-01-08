<template>
  <div class="art">
    <a href="{{src}}" target="_blank">
      <img
        :src="tmb['1x']"
        :srcset="tmb['2x']+' 2x'"
        class="art-image"
        alt="{{name}}"
      />
    </a>
  </div>
</template>

<script>
  export default {
    props: ['src', 'name', 'tmb']
  }
</script>

<style lang="sass">
  @import '~styles/variables';

  .art {
    margin: 1.5em;

    &-image {
      object-fit: contain;
      width: 100%;
    }
  }
</style>
