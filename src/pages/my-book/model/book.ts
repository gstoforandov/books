import { Dayjs } from 'dayjs';

export interface Book {
  id: number;
  title: string;
  year: string | Dayjs;
  author: string;
  genre: string;
}
