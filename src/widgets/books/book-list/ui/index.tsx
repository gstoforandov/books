import { FC } from "react"
import { Book } from "../../../../pages/my-book/model/book"
import { BookItem } from "../../book-item"

interface BookList {
  bookList: Book[]
}

export const BookList: FC<BookList> = ({ bookList }) => {
  return (
    bookList.map((book) => (
      <BookItem key={book.id} book={book} />
    ))
  )
}