<template>
  <figure class="art">
    <a
      href="{{src}}"
      target="_blank"
      data-size="{{ size.width }}x{{ size.height }}"
    >
      <img
        :src="tmb['1x']"
        :srcset="tmb['2x']+' 2x'"
        class="art__image"
        alt="{{name}}"
      />
    </a>
    <figcaption class="art__caption">
      {{name}}
    </figcaption>
  </figure>
</template>

<script>
  export default {
    props: {
      src: String,
      name: String,
      tmb: Object,
      size: {
        type: Object,
        default: () => ({
          width: 0,
          height: 0,
        })
      }
    },
    ready() {
      //console.log(this.size);
    }
  }
</script>

<style lang="sass">
  @import '~assets/styles/variables';

  .art {
    margin: 1.5em;

    &__image {
      object-fit: contain;
      width: 100%;
    }

    &__caption {
      display: none;
    }
  }
</style>
