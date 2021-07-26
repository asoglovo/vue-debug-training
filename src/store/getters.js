export const getters = {
  charactersList(state) {
    return Object.values(state.charactersById)
  },

  characterCount(state) {
    return Object.keys(state.charactersById).length
  },

  findCharacterById(state) {
    return (id) => state.charactersById[id]
  }
}