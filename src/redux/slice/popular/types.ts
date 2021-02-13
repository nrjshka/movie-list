import { MovieType } from '../../../models'

type PopularState = {
  isLoading: boolean
  isError: boolean
  data: MovieType[]
}

export type { PopularState }
