import { TableProps } from "antd"
import { Key, useState } from "react"

export const useRowSelection = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  const rowSelection: TableProps['rowSelection'] = {
    type: 'checkbox',
    selectedRowKeys,
    onChange: (selectedRowKeys: Key[]) => {
      setSelectedRowKeys(selectedRowKeys)
    },
  }
  return { rowSelection, selectedRowKeys, setSelectedRowKeys }
}