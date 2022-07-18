<template>
  <div class="box-container white rounded py-3">
    <div class="title">
      <h2>{{ title }}</h2>
    </div>
    <div class="p-24px">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "BoxContainer",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.box-container {
  .title {
    min-height: 70px;
    width: 100%;
    padding: 24px;
    border-bottom: 1px solid #e4e4e4;
    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }
  }
}
</style>