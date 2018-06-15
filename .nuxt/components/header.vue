<template>
  <header>
    <div class='header-container'>
      <div class='logo'>
        <a href="/">WELCOME NUXT</a>
      </div>

      <ul class='nav-menu'>
        <li><a href="/messages">一覧</a></li>
        <li><a href="/messages/new">登録</a></li>
      </ul>
    </div>
  </header>
</template>

<style>
header {
  border-bottom: 1px solid #41b883;
  padding: 10px 0;
}

header .header-container {
  width: 1020px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.logo {
  flex: 1;
}

.logo a {
  font-size: 24px;
  color: #41b883;
}

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.nav-menu li {
  display: inline-block;
  margin-left: 25px;
}

.nav-menu li a {
  color: black;
}
</style>
