<template>
  <div class="home">
    <div class="section-title">Inputs</div>
    <div class="card mb">
      <div>
        <input placeholder="Normal input" />
      </div>

      <div class="mt">
        <input placeholder="Number input" type="number" />
      </div>

      <div class="mt">
        <textarea rows="4" cols="50">
          textarea
        </textarea>
      </div>

      <div class="mt">
        <select name="somes-elect">
          <option value="foo">Foo</option>
          <option value="bar">Bar</option>
        </select>
      </div>

      <div class="mt">
        <input type="checkbox" />
      </div>

      <div class="mt">
        <input type="radio" id="male" name="gender" value="male" />
        <label for="male">Male</label>
        <br />
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female">Female</label>
        <br />
      </div>
    </div>
  </div>
</template>

<script lang="js" src="./Home.js"></script>

<style lang="scss" scoped>
.home {
  margin: 20px;
}
</style>
