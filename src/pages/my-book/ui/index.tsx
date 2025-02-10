import { Input } from "antd"
import { useEffect, useState } from "react"
import { Book } from "../model/book"
import { getBooks } from "../api/get-books"
import { BookList } from "../../../widgets/books/book-list/ui"

export const MyBooks = () => {

  const [bookList, setBookList] = useState<Book[] | null>(null)
  
  useEffect(() => {
    getBooks()
      .then(setBookList)
      .catch((error) => console.log(error?.message))
  }, [])

  return (
    <>
      <div>hello world</div>
      <Input />
      {bookList && <BookList bookList={bookList} />}
    </>
  )
}