export const mutations = {
  setLoadingCharacter(state, isLoading) {
    state.isLoadingCharacter = isLoading
  },

  saveCharacter(state, character) {
    state.charactersById = {
      ...state.charactersById,
      [character.id]: character
    }
  },

  incrementLoadedCharacterId(state) {
    state.lastLoadedCharacterId += 1
  }
}