export interface ITokenPayload {
  aud: string
  data: string
  exp: number
  iss: string
  rol: string
  user: string
}

export const tokenVoid: ITokenPayload = {
  aud: "",
  data: "",
  exp: 0,
  iss: "",
  rol: "",
  user: ""
}

/**
 * DEVUELVE LA CARGA UTIL DEL TOKEN EN UN OBJETO
 * @param token string
 * @returns ITokenPayload
 */
function parseJwt(token: string): ITokenPayload | undefined {
  const base64Url = token?.split('.')[1]

  if (base64Url) {
    const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/')
    if (base64) {
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join('')
      )

      return jsonPayload && JSON.parse(jsonPayload)
    }
  }

  return undefined
}

function hasTokenExpired(token: ITokenPayload): boolean {
  const expirationDate = new Date(token.exp * 1000)
  return expirationDate < new Date()
}

export { parseJwt, hasTokenExpired }
