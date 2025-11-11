import { Flex, Select } from "antd";

import "@/styles/layout/header.scss";
import IconArrowDown from "../Icon/IconArrowDown";

export default function Header() {
  const options = [
    {
      value: "KR",
      label: "KR",
    },
    { value: "EN", label: "EN" },
    { value: "CN", label: "CN" },
    { value: "JP", label: "JP" },
    { value: "VN", label: "VN" },
  ];

  return (
    <>
      <header className="header">
        <Flex align="center">
          <a href="" className="logo">
            <img src="./public/logo.png" alt="" />
          </a>
          <Select
            className="sel-lang"
            optionLabelProp="label"
            defaultValue="KR"
            style={{ width: 108, marginLeft: "auto" }}
            options={options}
            suffixIcon={<IconArrowDown />}
          />
        </Flex>
      </header>
    </>
  );
}
