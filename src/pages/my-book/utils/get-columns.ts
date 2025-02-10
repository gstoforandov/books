import { TableProps } from "antd";

// keep getColumns as function 
// because it may need to add context menu
export const getColumns = (): TableProps['columns'] => ([
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
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    width: 90,
  },
])