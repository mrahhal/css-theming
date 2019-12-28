<template>
  <div class="home">
    <div class="section-title">Themes</div>
    <div class="card mb">
      <div v-for="theme in themes" :key="theme.name">{{theme.name}}: {{theme.brightness}}</div>
    </div>

    <div class="section-title">Palette</div>
    <div class="card mb" style="display: flex">
      <div>
        <div class="color-palette" v-for="color in colorNames" :key="color">
          <div class="color-name">{{color}}</div>
          <div class="color-blocks">
            <color-block
              v-for="swatch in swatchNames"
              :key="swatch"
              :color="color"
              :swatch="swatch"
            ></color-block>
          </div>
        </div>
      </div>

      <div style="margin-left: 25px">
        <div class="color-palette" v-for="color of semanticColorNames" :key="color">
          <div class="color-name">{{color}}</div>
          <div class="color-blocks">
            <color-block
              v-for="swatch in swatchNames"
              :key="swatch"
              :color="color"
              :swatch="swatch"
            ></color-block>
          </div>
        </div>
      </div>
    </div>

    <div class="section-title">fgs</div>
    <div class="card fg-list mb">
      <div v-for="swatch in fgSwatchNames" :key="swatch">
        <div>{{swatch}}</div>
        <fg-block :swatch="swatch"></fg-block>
      </div>
    </div>

    <div class="section-title">Icons</div>
    <div class="card icons-list">
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
  margin: 20px;
}

.color-palette {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 15px;
  margin-bottom: 10px;
}

.color-blocks {
  display: flex;
}

.fg-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
}

.icons-list {
  display: flex;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
