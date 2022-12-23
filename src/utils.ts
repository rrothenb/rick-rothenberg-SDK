import * as https from 'https'

export type getResponseType<T> = {
  docs: T[]
  total: number
  limit: number
  offset: number
  page:number
  pages:number
}

export class BaseApi {
  protected token?: string
  protected constructor(token?: string) {
    this.token = token
  }
  protected get<T>(path: string): Promise<T> {
    return new Promise((resolve, reject) => {
      const options: https.RequestOptions = {
        host: 'the-one-api.dev',
        path: `/v2/${path}`
      }
      if (this.token) {
        options.headers = {Authorization: `Bearer ${this.token}`}
      }
      https.get(options, response => {
        if (response.statusCode && (response.statusCode < 200 || response.statusCode >= 300)) {
          return reject(`Status: ${response.statusMessage} (${response.statusCode})`);
        }
        let data = ''
        response.on('data', chunk => data += chunk)
        response.on('close', () => {
          const result = JSON.parse(data)
          if (!result.success && result.success !== undefined) {
            reject(result.message)
          } else {
            resolve(result)
          }
        })
      })
    })
  }
}
