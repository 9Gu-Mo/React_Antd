import { Checkbox, Flex, type CheckboxOptionType } from "antd";
import Title from "antd/es/typography/Title";

const options: CheckboxOptionType<string>[] = [
  { label: "Apple", value: "Apple", className: "label-1" },
  { label: "Pear", value: "Pear", className: "label-2" },
  { label: "Orange", value: "Orange", className: "label-3", disabled: true },
];

const custom: CheckboxOptionType<string>[] = [
  { label: "Banana", value: "Banana", className: "label-1" },
  { label: "Grape", value: "Grape", className: "label-2" },
  { label: "Kiwi", value: "Kiwi", className: "label-3", disabled: true },
];

export default function AntdCheck() {
  return (
    <>
      <Flex vertical gap={10}>
        <Title level={2}>Check Box</Title>
        <Flex vertical>
          <Title level={4}>default</Title>
          <Checkbox.Group options={options} defaultValue={["Apple"]} />
        </Flex>
        <Flex vertical>
          <Title level={4}>button type</Title>
          <Checkbox.Group
            options={custom}
            defaultValue={["Banana"]}
            className="chk-type-button"
          />
        </Flex>
      </Flex>
    </>
  );
}
