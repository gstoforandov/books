import { TableProps } from 'antd';
import dayjs from 'dayjs';
import { YEAR_FORMAT } from '../../../shared';
import { Book } from '../model/book';

// keep getColumns as function
// because it may need to add context menu
type GetColumns = () => TableProps<Book>['columns'];
export const getColumns: GetColumns = () => [
  {
    key: '1',
    title: 'Title',
    dataIndex: 'title',
    width: 144,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    width: 144,
  },
  {
    title: 'Year',
    dataIndex: 'year',
    width: 90,
    sorter: (a, b) => {
      const aDayjs = dayjs(a.year, YEAR_FORMAT).year();
      const bDayjs = dayjs(b.year, YEAR_FORMAT).year();
      return aDayjs - bDayjs;
    },
    render: (text) => {
      if (!text) return '';
      if (typeof text === 'string') return text;
      const date = dayjs(text, YEAR_FORMAT).year();
      return date;
    },
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    width: 90,
  },
];
