import { Flex, Radio, type RadioChangeEvent } from "antd";
import { useState } from "react";
import Title from "antd/es/typography/Title";

export default function AntdRadio() {
  const [value, setValue] = useState(1);
  const [valueSolid, setValueSolid] = useState(4);
  const [valueOutlined, setValueOutlined] = useState(7);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const onChangeSolid = (e: RadioChangeEvent) => {
    setValueSolid(e.target.value);
  };

  const onChangeOutlined = (e: RadioChangeEvent) => {
    setValueOutlined(e.target.value);
  };

  return (
    <>
      <Flex vertical gap={10}>
        <Title level={2}>Radio Group</Title>
        <Flex vertical>
          <Title level={4}>default</Title>
          <Radio.Group
            value={value}
            onChange={onChange}
            options={[
              { value: 1, label: "a" },
              { value: 2, label: "b" },
              { value: 3, label: "c", disabled: true },
            ]}
          />
        </Flex>

        <Flex vertical>
          <Title level={4}>solid</Title>
          <Radio.Group
            className="rdo-button"
            block
            optionType="button"
            buttonStyle="solid"
            value={valueSolid}
            onChange={onChangeSolid}
            options={[
              { value: 4, label: "d" },
              { value: 5, label: "e" },
              { value: 6, label: "f", disabled: true },
            ]}
          />
        </Flex>

        <Flex vertical>
          <Title level={4}>outlined</Title>
          <Radio.Group
            className="rdo-button"
            block
            optionType="button"
            value={valueOutlined}
            onChange={onChangeOutlined}
            options={[
              { value: 7, label: "g" },
              { value: 8, label: "h" },
              { value: 9, label: "i", disabled: true },
            ]}
          />
        </Flex>

        <Flex vertical>
          <Title level={4}>custom</Title>
          <Radio.Group
            className="rdo-custom"
            options={[
              { value: "rdo-1", label: "매우종지 않음" },
              { value: "rdo-2", label: "종지않음" },
              { value: "rdo-3", label: "보통" },
              { value: "rdo-4", label: "좋음" },
              { value: "rdo-5", label: "매우좋음" },
            ]}
          />
        </Flex>
      </Flex>
    </>
  );
}
