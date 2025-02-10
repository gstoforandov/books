import { ModalController } from "../../../widgets/modal/model/types";

export enum BookModalsEnum {
  updateBook = 'updateBook',
  addBook = 'addBook',
}

export const bookModalController: ModalController = {
  updateBook: false,
  addBook: false,
}