import { TableProps } from "antd";
import { Book } from "../model/book";

// keep getColumns as function 
// because it may need to add context menu
type GetColumns = () => TableProps<Book>['columns'];
export const getColumns: GetColumns = () => ([
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
    sorter: (a, b) => a.year.localeCompare(b.year)
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    width: 90,
  },
])