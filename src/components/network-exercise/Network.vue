<script>
import CharacterCard from './CharacterCard.vue'
import { getCharacter } from '../../api/rick-n-morty.api'
import { mapCharacter } from './map-character'

export default {
  components: { CharacterCard },

  data() {
    return {
      characterId: 11,
      characterLoadingState: 'not loaded',
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
      this.characterLoadingState = 'loading'

      const theCharacter = await getCharacter(this.characterId)
      this.character = mapCharacter(theCharacter)

      // API is too fast, simulating a delay
      setTimeout(() => {
        this.characterLoadingState = 'loaded'
      }, 500)
    },
  },
}
</script>

<template>
  <section>
    <h1>Exercise One: Network and Sources</h1>
    <p>
      Use the browser developer tool's debugger to find what's going wrong with
      this page. You'll see when a character is loaded, both their origin and
      location are not displayed; instead there are some question marks. Can you
      find and fix this problem?
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
      <p v-if="characterLoadingState === 'not loaded'">
        No character has been loaded
      </p>
      <p v-else-if="characterLoadingState === 'loading'">
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
</style>