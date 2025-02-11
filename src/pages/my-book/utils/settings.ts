import { Dispatch, SetStateAction } from "react";
import { FieldsEnum } from "../../../shared/utils/fields-enum";
import { Book } from "../model/book";
import { BookModalsEnum } from "../model/constants";
import dayjs from "dayjs";
import { YEAR_FORMAT } from "../../../shared/utils/date-settings";

export interface Fields {
  name: string;
  label?: string;
  format?: string;
  field: FieldsEnum;
  placeholder?: string;
}

export type BookSettings = {
  [key in BookModalsEnum]: {
    title: string;
    buttonText: string;
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
  const settings = {
    [BookModalsEnum.updateBook]: {
      title: 'Update book',
      buttonText: 'Change',
      onSubmit: (value: Book) => {
        changeBookList((prev) => [value, ...prev.filter((book) => book.id !== value.id)])
        onClose(false);
      },
      initialState: {
        ...initialState,
        year: dayjs(initialState?.year, YEAR_FORMAT),
      },
    },
    [BookModalsEnum.addBook]: {
      title: 'Add book',
      buttonText: 'Add',
      onSubmit: (value: Book) => {
        changeBookList((prev) => [value, ...prev])
        onClose(false);
      },
      initialState: undefined,
    },
    fields: [
      {
        name: 'id',
        label: 'Book ID',
        field: FieldsEnum.INPUT,
        placeholder: 'Введите значение',
      },
      {
        name: 'title',
        label: 'Book title',
        field: FieldsEnum.INPUT,
        placeholder: 'Введите значение'
      },
      {
        name: 'year',
        label: 'Year',
        field: FieldsEnum.DATE,
        format: YEAR_FORMAT,
        picker: 'year',
        placeholder: 'Введите дату выпуска'
      },
      {
        name: 'author',
        label: 'Author',
        field: FieldsEnum.INPUT,
        placeholder: 'Введите автора книги'
      },
      {
        name: 'genre',
        label: 'Genre',
        field: FieldsEnum.INPUT,
        placeholder: 'Введите жанр книги'
      },
    ],
  }
  return { ...settings[modalType], fields: settings.fields }
}