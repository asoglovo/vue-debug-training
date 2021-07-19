<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
})
</script>

<template>
  <nav class="menu-bar">
    <router-link to="/">Home</router-link>
    <span class="separator">|</span>

    <router-link to="/elements">Elements</router-link>
    <span class="separator">&#8594;</span>

    <router-link to="/network">Network</router-link>
    <span class="separator">&#8594;</span>

    <router-link to="/sources">Sources</router-link>
    <span class="separator">&#8594;</span>

    <router-link to="/vue">Vue</router-link>
  </nav>
</template>

<style scoped>
.menu-bar {
  text-align: center;
  padding: 1em;
  background: white;
  box-shadow: 0px 0px 10px #0003;
}

.separator {
  margin: 0 0.75em;
}
</style>
