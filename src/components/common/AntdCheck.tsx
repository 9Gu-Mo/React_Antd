import { Checkbox, Flex, type CheckboxOptionType } from "antd";
import Title from "antd/es/typography/Title";

const options: CheckboxOptionType<string>[] = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: true },
];

const custom: CheckboxOptionType<string>[] = [
  { label: "Banana", value: "Banana" },
  { label: "Grape", value: "Grape" },
  { label: "Kiwi", value: "Kiwi", disabled: true },
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
          <Title level={4}>solid</Title>
          <Checkbox.Group
            options={custom}
            defaultValue={["Banana"]}
            className="chk-button"
          />
        </Flex>
        <Flex vertical>
          <Title level={4}>outlined</Title>
          <Checkbox.Group
            options={custom}
            defaultValue={["Banana"]}
            className="chk-button chk-outlined"
          />
        </Flex>
      </Flex>
    </>
  );
}
