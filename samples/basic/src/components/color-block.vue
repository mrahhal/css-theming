<template>
  <div
    :style="{color: colorVariable, background: background}"
    :class="{'has-text': hasText}"
    :title="variable"
  >
    <template v-if="hasText">Sample</template>
  </div>
</template>

<script>
export default {
  props: ["color", "swatch"],
  computed: {
    variable: function() {
      return `--${this.color}-${this.swatch}`;
    },
    textVariable: function() {
      return `--${this.color}-text`;
    },
    background: function() {
      return `var(${this.variable})`;
    },
    colorVariable: function() {
      return `var(${this.textVariable})`;
    },
    hasText: function() {
      return this.swatch == "50";
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.has-text {
    width: initial;
    padding: 0 10px;
  }
}
</style>
