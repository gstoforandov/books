import { FC } from "react"
import { Book } from "../../../../pages/my-book/model/book"
import './styles.css'
interface BookItemProps {
  book: Book;
}

export const BookItem: FC<BookItemProps> = ({ book }) => {

  return (
    <div className="book-container">
      <div>{book.id}</div>
      <div>{book.author}</div>
      <div>{book.genre}</div>
      <div>{book.title}</div>
      <div>{book.year}</div>
    </div>
  )
}