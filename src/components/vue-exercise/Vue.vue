<script>
import CharacterLine from './CharacterLine.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { CharacterLine },

  computed: {
    ...mapGetters(['charactersList', 'characterCount']),
  },

  methods: {
    ...mapActions(['loadNextCharacter']),
  },
}
</script>

<template>
  <section>
    <h1>Vue Devtools</h1>

    <div>
      <h2>
        Characters <em>({{ characterCount }} loaded)</em>
      </h2>
      <button @click="loadNextCharacter">Load Next</button>

      <ul class="character-list">
        <li v-for="character of charactersList" :key="character.id">
          <CharacterLine :character="character" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.character-list {
  list-style: none;
}
</style>
