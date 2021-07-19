export function mapCharacter({ name, species, status, image, origin, location }) {
  const theOrigin = origin.mane
  const theLocation = location.mane

  return {
    name,
    species,
    status,
    image,
    origin: theOrigin,
    location: theLocation,
  }
}