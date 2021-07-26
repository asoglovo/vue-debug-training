<script>
import CharacterLine from './CharacterLine.vue'
import CharacterDetail from './CharacterDetail.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { CharacterLine, CharacterDetail },

  data() {
    return {
      seeMoreCharacterId: undefined,
    }
  },

  computed: {
    ...mapGetters(['charactersList', 'characterCount', 'findCharacterByID']),

    seeMoreCharacter() {
      if (!this.seeMoreCharacterId) {
        throw new Error('Expected a character id')
      }

      return this.findCharacterByID(this.seeMoreCharacterId)
    },
  },

  methods: {
    ...mapActions(['loadNextCharacter', 'characterById']),
  },
}
</script>

<template>
  <section>
    <h1>Vue Devtools</h1>

    <p>
      When the "Load Next" button is clicked, we should see a Rick And Morty
      character load in the list of characters and the count of loaded
      characters incremented, but there is an error loading the characters. Can
      you find what's wrong? Also, the counter of loaded characters seems to be
      broken; can you fix this one too?
    </p>

    <p>
      Then, when characters are loaded, they have a "see more" link which opens
      a dialog with some extra information, but again, this is failing. Can you
      fix this bug as well?
    </p>

    <div>
      <h2>
        Characters <em>({{ characterCount }} loaded)</em>
      </h2>
      <button @click="loadNextCharacter">Load Next</button>

      <ul class="character-list">
        <li v-for="character of charactersList" :key="character.id">
          <CharacterLine
            :character="character.name"
            @see-more-clicked="seeMoreCharacterId = $event"
          />
        </li>
      </ul>
    </div>

    <transition>
      <div v-if="seeMoreCharacterId" class="detail-overlay">
        <div class="detail-content">
          <div class="detail-content__content">
            <character-detail :character="seeMoreCharacter" />
          </div>
          <div class="detail-content__actions">
            <button @click="seeMoreCharacterId = undefined">Close</button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.character-list {
  list-style: none;
  margin: 3em 0;
}

.detail-overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0006;
}

.detail-content {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  min-height: 300px;
  min-width: 300px;
  padding: 16px 24px;
}

.detail-content__actions {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

.detail-content__content {
  flex: 1;
}
</style>
