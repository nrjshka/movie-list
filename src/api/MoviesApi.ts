import { api, ApiService } from './ApiService'

import { TMDB_API_KEY } from '../utils'

import { PopularMoviesResponse, SearchMoviesResponse } from './types'

class MovieApi {
  private api: ApiService

  constructor(api: ApiService) {
    this.api = api

    this.api.addQuery({ api_key: TMDB_API_KEY })
  }

  public getPopularMovies = (): Promise<PopularMoviesResponse> => this.api.get('/movie/popular')

  public getSearchResults = (query: string): Promise<SearchMoviesResponse> =>
    this.api.get('/search/movie', { params: { query } })
}

const movieApi = new MovieApi(api)

export { MovieApi, movieApi }
