import { getCharacter } from '../api/rick-n-morty.api'

export const actions = {
  async loadNextCharacter({ commit, state }) {
    commit('setLoadingCharacter', true)
    commit('incrementLoadedCharacterId')

    const character = await getCharacter(state.lastLoadedCharacterId)
    commit('saveCharacter', character)

    commit('setLoadingCharacter', false)
  }
}