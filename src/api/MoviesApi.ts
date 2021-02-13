import { api, ApiService } from './ApiService'

import { TMDB_API_KEY } from '../utils'

class MovieApi {
  private api: ApiService

  constructor(api: ApiService) {
    this.api = api

    this.api.addQuery({ api_key: TMDB_API_KEY })
  }

  public getPopularMovies = (): Promise<any> => this.api.get('/movie/popular')
}

const movieApi = new MovieApi(api)

export { MovieApi, movieApi }
