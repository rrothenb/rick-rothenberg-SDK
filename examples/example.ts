import { Api } from "../src"

const doit = async () => {
  const api = new Api(process.env.TOKEN)
  const books = await api.getBooks()
  console.log(books.docs.map(book => book.name))
  const book = await api.getBook(books.docs[0]._id)
  console.log(book.docs.map(book => book.name))
  const bookChapters = await api.getBookChapters(books.docs[0]._id)
  console.log(bookChapters.docs.map(bookChapter => bookChapter.chapterName))
  try {
    await api.getBookChapters('badid')
  } catch (e) {
    console.log('Error:', e)
  }
  const movies = await api.getMovies()
  console.log(movies.docs.map(movie => `${movie.name} runs ${movie.runtimeInMinutes} minutes long`))
}

doit()
