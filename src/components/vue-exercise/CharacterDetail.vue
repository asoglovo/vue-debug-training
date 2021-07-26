<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    character: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const episodes = ref(undefined)
    const episodesCount = ref(0)

    onMounted(async () => {
      episodes.value = await Promise.all(
        props.character.episode.map(async episodeUrl => {
          const response = await fetch(episodeUrl)
          return response.json()
        }),
      )

      episodesCount.value = episodes.value.length
    })

    return {
      episodes,
      episodesCount,
    }
  },
})
</script>

<template>
  <div>
    <h1>{{ character.name }}</h1>

    <section>
      <h2>Locations</h2>
      <ul>
        <li><strong>Origin:</strong> {{ character.origin.name }}</li>
        <li><strong>Current:</strong> {{ character.location.name }}</li>
      </ul>
    </section>

    <section>
      <h2>
        Episodes <em>({{ episodesCount }} total)</em>
      </h2>
      <ul class="episodes-list" v-if="!!episodes">
        <li v-for="episode in episodes" :key="episode.id">
          <em>[{{ episode.episode }}]</em>: {{ episode.name }}
        </li>
      </ul>
      <p class="loading" v-else>Loading...</p>
    </section>
  </div>
</template>

<style scoped>
.episodes-list {
  height: 300px;
  overflow-y: scroll;
}

.loading {
  height: 300px;
}
</style>
