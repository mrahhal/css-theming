<template>
  <div
    class="fg-block-container"
    :style="{background: fg}"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="fg-block-bd" :style="{background: bd}"></div>
  </div>
</template>

<script>
export default {
  props: ["swatch"],
  data: function() {
    return {
      hover: false
    };
  },
  computed: {
    fg: function() {
      return `var(--fg-${this.swatch})`;
    },
    bd: function() {
      const postfix = this.hover ? "-focus" : "";
      return `var(--bd${postfix})`;
    }
  }
};
</script>

<style lang="scss" scoped>
.fg-block-container {
  display: inline-block;
  width: 150px;
  height: 40px;
  position: relative;
}

.fg-block-bd {
  position: absolute;
  height: 1.5px;
  top: 50%;
  left: 0;
  right: 0;
}
</style>
