import { Dispatch, SetStateAction } from "react";
import { FieldsEnum } from "../../../shared/utils/fields-enum";
import { Book } from "../model/book";
import { BookModalsEnum } from "../model/constants";

export interface Fields {
  name: string;
  label?: string;
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
  changeBookList: Dispatch<SetStateAction<Book[]>>
}

export const getSettings = ({
  modalType,
  changeBookList,
}: GetSettings) => {
  const settings = {
    [BookModalsEnum.updateBook]: {
      title: 'Update book',
      buttonText: 'Change',
      onSubmit: (value: Book) => {
        changeBookList((prev) => [value, ...prev])
      }
    },
    [BookModalsEnum.addBook]: {
      title: 'Add book',
      buttonText: 'Add',
      onSubmit: (value: Book) => {
        changeBookList((prev) => [value, ...prev])
      }
    },
    fields: [
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