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
  <div class="character">
    <img
      class="character-pic"
      :src="character.image"
      :alt="character.name"
      width="100"
      height="100"
    />

    <div>
      <h3 class="character__title">
        {{ character.name }}
        {{ character.gender === 'Female' ? '♀️' : '♂️' }}
      </h3>
      {{ character.species }} | {{ character.status }}
    </div>
  </div>
</template>

<style scoped>
.character {
  display: flex;
  margin-bottom: 20px;
}

.character__title {
  margin: 0.5em 0;
}

.character-pic {
  border-radius: 50%;
  margin-right: 40px;
}
</style>