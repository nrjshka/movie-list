import { MovieType } from '../../../models'

type SavedMoviesType = {
  data: MovieType[]
}

type SupportedStores = 'watchLater' | 'favourite'

export type { SavedMoviesType, SupportedStores }
