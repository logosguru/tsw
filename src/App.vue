<template>
  <div id="app">
    <nav class="level">
      <p class="level-item has-text-centered">
        <a href="#/" class="link is-info">Home</a>
      </p>
      <p class="level-item has-text-centered">
        <img alt="TeamStudyWise" src="./assets/img/logo.jpg" style="height: 100px;">
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info">Logout</a>
      </p>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #2E58A6;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

<style>
#app {
  margin-top: 20px;
}
</style>
