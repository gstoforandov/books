import dayjs from 'dayjs';
import { Dispatch, SetStateAction } from 'react';
import { Fields } from '../../../shared/model/type';
import { YEAR_FORMAT } from '../../../shared/utils/date-settings';
import { FieldsEnum } from '../../../shared/utils/fields-enum';
import { Book } from '../model/book';
import { BookModalsEnum } from '../model/constants';
import { initialBookState } from './initialState';

export type BookSettings = {
  [key in BookModalsEnum]: {
    title: string;
    buttonText: string;
    onSubmit: (value: Book) => void;
    initialState?: Book;
  };
} & {
  fields: Fields[];
};

interface GetSettings {
  modalType: BookModalsEnum;
  changeBookList: Dispatch<SetStateAction<Book[]>>;
  initialState?: Book;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const getSettings = ({
  modalType,
  changeBookList,
  initialState,
  onClose,
}: GetSettings) => {
  const initialStateForm = initialState || initialBookState;
  const settings: BookSettings = {
    [BookModalsEnum.updateBook]: {
      title: 'Update book',
      buttonText: 'Change',
      onSubmit: (value: Book) => {
        changeBookList((prev) => [
          value,
          ...prev.filter((book) => book.id !== value.id),
        ]);
        onClose(false);
      },
      initialState: {
        ...initialStateForm,
        year: dayjs(initialStateForm?.year, YEAR_FORMAT),
      },
    },
    [BookModalsEnum.addBook]: {
      title: 'Add book',
      buttonText: 'Add',
      onSubmit: (value: Book) => {
        changeBookList((prev) => [value, ...prev]);
        onClose(false);
      },
      initialState: undefined,
    },
    fields: [
      {
        name: 'id',
        label: 'Book ID',
        field: FieldsEnum.INPUT,
        placeholder: 'Enter book id',
        required: true,
      },
      {
        name: 'title',
        label: 'Book title',
        field: FieldsEnum.INPUT,
        placeholder: 'Enter book title',
        required: true,
      },
      {
        name: 'year',
        label: 'Year',
        field: FieldsEnum.DATE,
        format: YEAR_FORMAT,
        picker: 'year',
        placeholder: 'Year of the book',
        required: true,
      },
      {
        name: 'author',
        label: 'Author',
        field: FieldsEnum.INPUT,
        placeholder: 'Enter the author of the book',
        required: true,
      },
      {
        name: 'genre',
        label: 'Genre',
        field: FieldsEnum.INPUT,
        placeholder: 'Enter the genre of the book',
        required: true,
      },
    ],
  };
  return { ...settings[modalType], fields: settings.fields };
};
