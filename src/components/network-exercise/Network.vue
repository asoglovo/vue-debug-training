<script>
import CharacterCard from './CharacterCard.vue'
import { getCharacter } from '../../api/rick-n-morty.api'
import { mapCharacter } from './map-character'

export default {
  components: { CharacterCard },

  data() {
    return {
      ui: {
        hasError: false,
        errorMessage: undefined,
        loadingStatus: 'not loaded',
      },
      characterId: 11,
      character: {
        name: 'none',
        species: 'none',
        status: 'none',
        image: null,
        origin: 'none',
        location: 'none',
      },
    }
  },

  methods: {
    async loadCharacter() {
      this.ui.loadingStatus = 'loading'
      this.ui.hasError = false
      this.ui.errorMessage = undefined

      const response = await getCharacter(this.characterId + 'id')
      if (response.error) {
        this.ui.hasError = true
        this.ui.errorMessage = response.error
      } else {
        this.character = mapCharacter(response)
      }

      // API is too fast, simulating a delay
      setTimeout(() => {
        this.ui.loadingStatus = 'loaded'
      }, 500)
    },
  },
}
</script>

<template>
  <section>
    <h1>Exercise One: Network and Sources</h1>
    <p>
      Use the browser developer tool's network tab to find what's going wrong
      with this page. A Rick and Morty character should be loaded when the "Load
      Character" button is clicked, but there's an error instead. Can you find
      and fix this problem?
    </p>

    <form class="form" action="">
      <label for="character-id">Character Id</label>
      <input
        type="number"
        v-model="characterId"
        name="character-id"
        id="character-id"
      />
      <button type="button" @click="loadCharacter">Load Character</button>
    </form>

    <div>
      <p v-if="ui.hasError" class="error">
        Error loading the character: <strong>{{ ui.errorMessage }}</strong>
      </p>
      <p v-else-if="ui.loadingStatus === 'not loaded'">
        No character has been loaded
      </p>
      <p v-else-if="ui.loadingStatus === 'loading'">
        Loading...
      </p>
      <template v-else>
        <character-card :character="character" />
      </template>
    </div>
  </section>
</template>

<style scoped>
.form {
  margin: 4em 0;
}
.form > * {
  margin-right: 0.5em;
}

.error {
  color: red;
}
</style>