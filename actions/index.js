export const gatherAll = data => ({
  type: 'GATHER_ALL',
  data
})

export const gatherDog = data => ({
  type: 'GATHER_DOG',
  data
})

export const gatherBreed = data => ({
  type: 'GATHER_BREED',
  data
})

export const filterBreed = filter => ({
  type: 'FILTER_BREED',
  filter
})