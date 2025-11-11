import { Flex, Select } from "antd";

// import "@/styles/layout/header.scss";
import style from "@/styles/layout/header.module.scss";
import IconArrowDown from "../Icon/IconArrowDown";

interface Props {
  intro?: boolean;
}

export default function Header(props: Props) {
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
      {props.intro ? (
        <header className={`${style.header} ${style.intro}`}>
          <Flex align="center">
            <a href="" className={style.logo}>
              <img src="/logo.png" alt="" />
            </a>
            <Select
              className={style.selLang}
              optionLabelProp="label"
              defaultValue="KR"
              style={{ width: 108, marginLeft: "auto" }}
              options={options}
              suffixIcon={<IconArrowDown />}
            />
          </Flex>
        </header>
      ) : (
        <header>
          <Flex align="center"></Flex>
        </header>
      )}
    </>
  );
}
