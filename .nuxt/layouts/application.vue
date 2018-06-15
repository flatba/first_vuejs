<template>
  <div class='app'>
    <header-component />

    <div class='container'>
      <nuxt />
    </div>
  </div>
</template>

<style>
.app .container {
  width: 500px;
  margin-top: 30px;
  margin-bottom: 50px;
}

.page-enter-active, .page-leave-active {
  transition: opacity .1s;
}

.page-enter, .page-leave-to {
  opacity: 0;
}
</style>