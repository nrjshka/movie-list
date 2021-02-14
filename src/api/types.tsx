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

type SearchMoviesResponse = {
  page: number
  results: MovieType[]
  total_pages: number
  total_results: number
}

type MovieVideosResponse = {
  id: number
  results: {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    site: string
    size: number
    type: string
  }[]
}

export type {
  ApiErrorData,
  ApiHeaders,
  ErrorResponse,
  ApiQuery,
  PopularMoviesResponse,
  SearchMoviesResponse,
  MovieVideosResponse,
}
