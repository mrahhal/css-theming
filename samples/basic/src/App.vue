<template>
  <div id="app">
    <div class="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button type="button" style="margin-left: 10px" @click="changeNavbarTheme">Change Navbar Theme</button>
    </div>
    <router-view/>
  </div>
</template>

<script lang="js" src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>
