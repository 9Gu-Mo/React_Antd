import { Flex, type CheckboxOptionType } from "antd";
import Title from "antd/es/typography/Title";
import AntdCheck from "../antd/AntdCheck";
import { useState } from "react";

const fruits: CheckboxOptionType<string>[] = [
  { label: "Banana", value: "Banana" },
  { label: "Grape", value: "Grape" },
  { label: "Kiwi", value: "Kiwi", disabled: true },
];

const animal: CheckboxOptionType<string>[] = [
  { label: "Dog", value: "dog" },
  { label: "Cat", value: "cat", disabled: true },
];

const country: CheckboxOptionType<string>[] = [
  { label: "Korea", value: "Korea" },
  { label: "Usa", value: "Usa" },
  { label: "Japan", value: "Japan" },
];

export default function AntdCheckWrap() {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const [selectedAnimals, setSelectedAnimals] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountrys] = useState<string[]>(["Korea"]);

  const handleChangeFruits = (values: string[]) => {
    setSelectedFruits(values);
  };

  const handleChangeAnimal = (values: string[]) => {
    setSelectedAnimals(values);
  };

  const handleChangeCountry = (values: string[]) => {
    setSelectedCountrys(values);
  };

  return (
    <>
      <Flex vertical gap={10}>
        <Title level={2}>Check Box</Title>
        <Flex vertical>
          <Title level={4}>default</Title>
          <AntdCheck options={fruits} value={selectedFruits} onChange={handleChangeFruits} />
        </Flex>
        <Flex vertical>
          <Title level={4}>solid</Title>
          <AntdCheck options={animal} value={selectedAnimals} onChange={handleChangeAnimal} button solid />
        </Flex>
        <Flex vertical>
          <Title level={4}>outlined</Title>
          <AntdCheck options={country} value={selectedCountry} onChange={handleChangeCountry} button outlined />
        </Flex>
      </Flex>
    </>
  );
}
