<script>
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'App',

  components: { MenuBar },
}
</script>

<template>
  <div id="app">
    <menu-bar />
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  background: #f2f2f2;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main {
  max-width: 800px;
  margin: 2em auto;
  padding: 8px 40px;
}

a {
  text-decoration: none;
}

h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
p,
a,
span,
li {
  font-size: 1.25rem;
}

button,
input {
  font-family: inherit;
  font-size: 1rem;
  padding: 8px 16px;
}

label {
  display: block;
  margin-bottom: 4px;
}

/* section {
  padding: 8px 40px;
} */
</style>
