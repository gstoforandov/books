import { TableProps } from 'antd';
import { Key, useState } from 'react';

export const useRowSelection = <T,>() => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const rowSelection: TableProps<T>['rowSelection'] = {
    type: 'checkbox',
    selectedRowKeys,
    onChange: (selectedRowKeys: Key[]) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };
  return { rowSelection, selectedRowKeys, setSelectedRowKeys };
};
