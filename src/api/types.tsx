type ApiHeaders = {
  'Content-Type'?: string
}

type ApiErrorData<T = any> = {
  isNetworkError: boolean
  errorData: T
}

type ErrorResponse = {}

export type { ApiErrorData, ApiHeaders, ErrorResponse }
