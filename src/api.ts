import { BaseApi, getResponseType } from './utils'

type BookType = {
  _id: string
  name: string
}

type ChapterType = {
  _id: string
  chapterName: string
}

type MovieType = {
  _id: string
  name: string
  runtimeInMinutes: number
  boxOfficeRevenueInMillions: number
  academyAwardNominations: number
  academyAwardWins: number
  rottenTomatoesScore: number
}

export class Api extends BaseApi {
  constructor(token?: string) {
    super(token);
  }

  /**
   * List of all "The Lord of the Rings" books.  Token optional.
   */
  getBooks() {
    return this.get<getResponseType<BookType>>('book')
  }

  /**
   * Request one specific book.  Token optional.
   * @param id id of the book
   */
  getBook(id: string) {
    return this.get<getResponseType<BookType>>(`book/${id}`)
  }

  /**
   * Request all chapters of one specific book.  Token optional.
   * @param id of the book
   */
  getBookChapters(id: string) {
    return this.get<getResponseType<ChapterType>>(`book/${id}/chapter`)
  }

  /**
   * List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies.  Token required.
   */
  getMovies() {
    return this.get<getResponseType<MovieType>>('movie')
  }
}
