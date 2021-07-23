import Vuex from 'vuex'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

export function makeStore() {
  return new Vuex.Store({
    state: {
      isLoadingCharacter: false,
      lastLoadedCharacterId: 0,
      charactersById: {}
    },
    actions,
    mutations,
    getters,
  })
}