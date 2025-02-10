import { MouseEvent, useCallback, useEffect, useState } from "react"
import { Book } from "../model/book"
import { getBooks } from "../api/get-books"
import { BookTable } from "../../../widgets/books/ui"
import { getColumns } from "../utils/get-columns"
import { HeaderMyBooks } from "./header/header-my-books"
import { BookModalsEnum } from "../model/constants"
import { ModalBooks } from "./multi-modal"
import { useRowSelection } from "../../../widgets/books/hooks/useRowSelection"

export const MyBooks = () => {

  const [bookList, setBookList] = useState<Book[]>([])
  const [modalSettings, setModalSettings] = useState<BookModalsEnum>(BookModalsEnum.addBook);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { selectedRowKeys, rowSelection, setSelectedRowKeys } = useRowSelection();

  useEffect(() => {
    getBooks()
      .then(setBookList)
      .catch((error) => console.log(error?.message))
  }, [])

  const columns = getColumns();

  const handleOpenModal = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setModalSettings(value as BookModalsEnum)
    setIsOpenModal((prev) => !prev)
  }, [])

  const handleRemoveBook = useCallback(() => {
    setBookList((prev) => prev.filter((book) => !selectedRowKeys.includes(book.id)))
    setSelectedRowKeys([])
  }, [selectedRowKeys, setSelectedRowKeys])

  return (
    <>
      <HeaderMyBooks
        handleRemoveBook={handleRemoveBook}
        handleOpenModal={handleOpenModal}
      />
      <BookTable
        data={bookList}
        columns={columns}
        rowSelection={rowSelection}
        rowKey="id"
      />
      {isOpenModal && (
        <ModalBooks
          modalType={modalSettings}
          onClose={handleOpenModal}
          isOpen={isOpenModal}
          changeBookList={setBookList}
        />
      )}
    </>
  )
}