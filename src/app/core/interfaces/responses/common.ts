
export interface ResponseBase {
  success: boolean
  message: string
  data: any
}

export interface error {
  title: string
  detail: string
}

export interface ErrorsResponse {
  errors: error[]
}
