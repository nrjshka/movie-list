type MovieType = {
  id: number
  original_title: string
  original_language: string
  overview: string
  release_date: string
  title: string
  vote_average: number
  adult: boolean
  genre_ids: number[]
  popularity: number
  vote_count: number
  video: boolean
  poster_path: string | null
  backdrop_path: string | null
}

const movieMock: MovieType = {
  adult: false,
  backdrop_path: '/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg',
  genre_ids: [10749, 35],
  id: 761053,
  original_language: 'en',
  original_title: "Gabriel's Inferno Part III",
  overview:
    "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
  popularity: 36.044,
  poster_path: '/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg',
  release_date: '2020-11-19',
  title: "Gabriel's Inferno Part III",
  video: false,
  vote_average: 8.9,
  vote_count: 689,
}

export { movieMock }
export type { MovieType }
