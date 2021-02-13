import { MovieType } from '../models'

type ApiHeaders = {
  'Content-Type'?: string
}

type ApiQuery = {
  api_key?: string
}

type ApiErrorData<T = any> = {
  isNetworkError: boolean
  errorData: T
}

type ErrorResponse = {}

type PopularMoviesResponse = {
  page: number
  results: MovieType[]
  total_pages: number
  total_results: number
}

export type { ApiErrorData, ApiHeaders, ErrorResponse, ApiQuery, PopularMoviesResponse }
