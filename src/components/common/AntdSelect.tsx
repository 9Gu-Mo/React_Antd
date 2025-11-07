import { Flex, Select } from "antd";
import Title from "antd/es/typography/Title";

export default function AntdSelect() {
  return (
    <>
      <Flex vertical>
        <Title level={2}>Select</Title>
        <Select
          allowClear
          defaultValue={"select"}
          options={[
            { value: "1", label: <span>Option1</span> },
            { value: "2", label: <span>Option2</span> },
            { value: "3", label: <span>Option3</span>, disabled: true },
          ]}
        />
      </Flex>
    </>
  );
}
