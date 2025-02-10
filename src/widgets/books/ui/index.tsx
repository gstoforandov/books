import { FC } from "react"
import { Book } from "../../../pages/my-book/model/book"
import { Table, TableProps } from "antd"

interface BookTableProps {
  data: Book[];
  columns: TableProps['columns']
  rowSelection: TableProps['rowSelection'];
  rowKey: string;
  onRow: TableProps['onRow'];
}

export const BookTable: FC<BookTableProps> = ({
  data,
  columns,
  rowSelection,
  rowKey,
  onRow,
}) => {
  return (
    <Table
      rowSelection={rowSelection}
      dataSource={data}
      columns={columns}
      rowKey={rowKey}
      onRow={onRow}
    />
  )
}