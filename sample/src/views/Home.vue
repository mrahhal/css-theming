<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{message}}</div>

    <div class="icons-list">
      <svg-clock></svg-clock>
      <svg-close></svg-close>
      <svg-moon></svg-moon>
      <svg-sun></svg-sun>
      <svg-github></svg-github>
    </div>
  </div>
</template>

<script lang="js" src="./Home.js"></script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.icons-list {
  margin-top: 20px;
  display: flex;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
