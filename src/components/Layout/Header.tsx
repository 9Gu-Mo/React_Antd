import "@/styles/layout/header.scss";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";

export default function Header() {
  return (
    <>
      <header className="header">
        <Flex align="center">
          <Flex gap={16} align="center">
            {/* <button type="button">
              <IconArrowLeft />
            </button> */}
            <Title level={3}>평가 샘플 472</Title>
          </Flex>
          <span>
            <strong>1</strong>/20
          </span>
        </Flex>
      </header>
    </>
  );
}
