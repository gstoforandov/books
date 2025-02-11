import { Button } from 'antd';
import { FC, MouseEvent } from 'react';
import { BookModalsEnum } from '../../model/constants';
import './style.css';

interface HeaderProps {
  handleOpenModal: (event: MouseEvent<HTMLButtonElement>) => void;
  handleRemoveBook: () => void;
}

export const HeaderMyBooks: FC<HeaderProps> = ({
  handleOpenModal,
  handleRemoveBook,
}) => {
  return (
    <div className='header-book-container'>
      <Button
        type='primary'
        value={BookModalsEnum.addBook}
        onClick={handleOpenModal}
        size='middle'
      >
        Add book
      </Button>
      <Button size='middle' onClick={handleRemoveBook} danger>
        Remove books
      </Button>
    </div>
  );
};
