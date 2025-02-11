import { Table, TableProps } from "antd"
import { JSX, memo } from "react"

export const BookReference = memo(<T,>({
  dataSource,
  columns,
  rowSelection,
  rowKey,
  onRow,
  className
}: TableProps<T>) => {
  return (
    <Table
      className={className}
      onRow={onRow}
      rowSelection={rowSelection}
      dataSource={dataSource}
      columns={columns}
      rowKey={rowKey}
      bordered
    />
  )
}) as <T>(props: TableProps<T>) => JSX.Element
