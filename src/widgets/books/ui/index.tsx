import { Table, TableProps } from 'antd';
import { JSX, memo } from 'react';

const BookTable = <T,>({
  dataSource,
  columns,
  rowSelection,
  rowKey,
  onRow,
  className,
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
  );
};

export const BookReference = memo(BookTable) as <T>(
  props: TableProps<T>
) => JSX.Element;
