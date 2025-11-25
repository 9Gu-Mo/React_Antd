interface RowData {
  key: number;
  name: string;
  age: number;
}

import { Checkbox, Table } from "antd";
import { useState } from "react";

export default function AntdTable() {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedKeys, setCheckedKeys] = useState<Record<number, boolean>>({});

  const handleCheck = (key: number, checked: boolean) => {
    setCheckedKeys((prev) => ({ ...prev, [key]: checked }));
  };

  const handleAllCheck = (checked: boolean) => {
    setAllChecked(checked);
    setCheckedKeys({
      1: checked,
      2: checked,
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: <Checkbox checked={allChecked} onChange={(e) => handleAllCheck(e.target.value)} />,
      dataIndex: "check",
      render: (_: unknown, record: RowData) => (
        <Checkbox
          checked={checkedKeys[record.key] || false}
          onChange={(e) => setCheckedKeys((prev) => ({ ...prev, [record.key]: e.target.checked }))}
        />
      ),
    },
    {
      title: "Check",
      dataIndex: "check",
      render: (_: unknown, record: RowData) => (
        <Checkbox
          checked={checkedKeys[record.key] || false}
          onChange={(e) => handleCheck(record.key, e.target.checked)}
        />
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
    },
  ];

  const data = [
    { key: 1, name: "John", age: 28 },
    { key: 2, name: "Tom", age: 32 },
  ];

  return (
    <>
      <Table dataSource={data} columns={columns} tableLayout="fixed" className="tbl-result" pagination={false} />
    </>
  );
}
