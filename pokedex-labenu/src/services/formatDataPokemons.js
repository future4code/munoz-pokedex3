
export const convertDecimetresToCm = (height) => {
  return height / 0.10000
}

export const convertHectogramsToKg = (weight) => {
  return weight * 0.1
}

export const translateType = (type) => {
  switch (type) {
    case 'grass':
      return 'Planta'
    case 'fire':
      return 'Fogo'
    case 'water':
      return 'Água'
    case 'bug':
      return 'Inseto'
    case 'normal':
      return 'Normal'
    case 'poison':
      return 'Venenoso'
    case 'electric':
      return 'Elétrico'
    case 'ground':
      return 'Terra'
    case 'fighting':
      return 'Lutador'
    case 'psychic':
      return 'Psíquico'
    case 'rock':
      return 'Pedra'
    case 'flying':
      return 'Voador'
    case 'ghost':
      return 'Fantasma'
    case 'ice':
      return 'Gelo'
    case 'dragon':
      return 'Dragão'
    case 'steel':
      return 'Metálico'
    case 'dark':
      return 'Noturno'
    case 'fairy':
      return 'Fada'
    default:
      return ''
  }
}