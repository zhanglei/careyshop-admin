<template>
  <div class="cs-page-cover">
    <div class="cs-page-cover__logo">
      <slot/>
    </div>
    <p class="cs-page-cover__title">{{title}}</p>
    <p class="cs-page-cover__sub-title cs-mt-0">{{subTitle}}</p>
    <slot name="footer"/>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Title'
    },
    subTitle: {
      type: String,
      required: false,
      default: 'subTitle'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.cs-page-cover {
  @extend %full;
  //@extend %unable-select;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .cs-page-cover__logo {
    img {
      width: 200px;
    }
  }
  .cs-page-cover__title {
    color: $color-text-main;
  }
  .cs-page-cover__sub-title {
    color: $color-text-sub;
  }
}
</style>
