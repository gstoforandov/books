import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useRowSelection } from '../../../widgets/books/hooks/useRowSelection';
import { BookReference } from '../../../widgets/books/ui';
import { getBooks } from '../api/get-books';
import { Book } from '../model/book';
import { BookModalsEnum } from '../model/constants';
import { getColumns } from '../utils/get-columns';
import { HeaderMyBooks } from './header/header-my-books';
import { ModalBooks } from './multi-modal';
import './my-books.css';
export const MyBooks = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [modalSettings, setModalSettings] = useState<BookModalsEnum>(
    BookModalsEnum.addBook
  );
  const [currentBook, setCurrentBook] = useState<Book>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { selectedRowKeys, rowSelection, setSelectedRowKeys } =
    useRowSelection<Book>();

  useEffect(() => {
    getBooks()
      .then(setBookList)
      .catch((error) => console.log(error?.message));
  }, []);

  const columns = getColumns();

  const handleOpenModal = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { value } = event.currentTarget;
      setModalSettings(value as BookModalsEnum);
      setIsOpenModal((prev) => !prev);
    },
    []
  );

  const handleRemoveBook = useCallback(() => {
    setBookList((prev) =>
      prev.filter((book) => !selectedRowKeys.includes(book.id))
    );
    setSelectedRowKeys([]);
  }, [selectedRowKeys, setSelectedRowKeys]);

  const handleOnRow = useCallback((record: Book) => {
    const defaultParams = {
      onDoubleClick: () => {
        setCurrentBook(record);
        setModalSettings(BookModalsEnum.updateBook);
        setIsOpenModal((prev) => !prev);
      },
    };
    return defaultParams;
  }, []);

  return (
    <>
      <HeaderMyBooks
        handleRemoveBook={handleRemoveBook}
        handleOpenModal={handleOpenModal}
      />
      <BookReference
        dataSource={bookList}
        columns={columns}
        rowSelection={rowSelection}
        rowKey='id'
        className='book-table-container'
        onRow={handleOnRow}
      />
      {isOpenModal && (
        <ModalBooks
          modalType={modalSettings}
          onClose={setIsOpenModal}
          isOpen={isOpenModal}
          changeBookList={setBookList}
          initialState={currentBook}
        />
      )}
    </>
  );
};
