const BASE_URL = 'https://rickandmortyapi.com/api'

export async function getCharacter(id) {
  const response = await fetch(`${BASE_URL}/character/${id}`)
  return response.json()
}
