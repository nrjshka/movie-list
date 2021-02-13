import { api, ApiService } from './ApiService'

class MovieApi {
  private api: ApiService

  constructor(api: ApiService) {
    this.api = api
  }

  public getPopularMovies = (): Promise<any> => this.api.get('/movie/popular')
}

const movieApi = new MovieApi(api)

export { MovieApi, movieApi }
