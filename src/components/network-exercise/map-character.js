export function mapCharacter({ name, species, status, image, origin, location }) {
  return {
    name,
    species,
    status,
    image,
    origin: origin.name,
    location: location.name,
  }
}