<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    character: {
      type: Object,
      required: true,
    },
  },

  setup() {},
})
</script>

<template>
  <div class="character-card">
    <img
      class="character-pic"
      :src="character.image"
      :alt="character.name"
      width="300"
      height="300"
    />

    <table class="character-data">
      <tbody>
        <tr>
          <td><strong>Name</strong></td>
          <td>{{ character.name || '???' }}</td>
        </tr>
        <tr>
          <td><strong>Species</strong></td>
          <td>{{ character.species || '???' }}</td>
        </tr>
        <tr>
          <td><strong>Status</strong></td>
          <td>{{ character.status || '???' }}</td>
        </tr>
        <tr>
          <td><strong>Origin</strong></td>
          <td>{{ character.origin || '???' }}</td>
        </tr>
        <tr>
          <td><strong>Location</strong></td>
          <td>{{ character.location || '???' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.character-card {
  display: flex;
  justify-content: center;
}

.character-pic {
  margin: 0 2em;
}

.character-data {
  border-collapse: collapse;
}
.character-data tr td {
  padding: 0.25em 1em;
}
.character-data tr:not(:last-child) td {
  border-bottom: 1px solid;
}
</style>
