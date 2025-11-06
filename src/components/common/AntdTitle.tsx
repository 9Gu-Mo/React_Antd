import { Flex } from "antd";
import Title from "antd/es/typography/Title";

export default function AntdTitle() {
  return (
    <>
      <Flex vertical gap={10}>
        <Title level={2}>Title</Title>
        <Title level={2}>h2 Title</Title>
        <Title level={3}>h3 Title</Title>
        <Title level={4}>h4 Title</Title>
        <Title level={5}>h5 Title</Title>
      </Flex>
      <div>
        <Title>h1 Title</Title>
      </div>
    </>
  );
}
