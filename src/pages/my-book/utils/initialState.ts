import dayjs from 'dayjs';
import { Book } from '../model/book';

export const initialBookState: Book = {
  id: Date.now(),
  title: 'Sample Book',
  author: 'Author Name',
  genre: 'Fiction',
  year: dayjs(),
};
