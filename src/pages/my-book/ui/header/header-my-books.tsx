import { Button } from "antd"
import { BookModalsEnum } from "../../model/constants"
import { MouseEvent, FC } from "react";

interface HeaderProps {
  handleOpenModal: (event: MouseEvent<HTMLButtonElement>) => void;
  handleRemoveBook: () => void;
}

export const HeaderMyBooks: FC<HeaderProps> = ({
  handleOpenModal,
  handleRemoveBook,
}) => {
  return (
    <div className="header-book-container">
      <Button
        type="primary"
        value={BookModalsEnum.addBook}
        onClick={handleOpenModal}
      >
        Add book
      </Button>
      <Button
        onClick={handleRemoveBook}
      >
        Remove books
      </Button>
    </div>
  )
}