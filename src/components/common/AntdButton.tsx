import { Flex, Button } from "antd";
import Title from "antd/es/typography/Title";

export default function AntdButton() {
  return (
    <>
      <Flex vertical gap={10}>
        <Title level={2}>Button</Title>
        <Flex gap={"small"} wrap>
          <Button color="default" variant="solid" htmlType="submit">
            default-solid
          </Button>

          <Button color="primary" variant="solid">
            primary-solid
          </Button>

          <Button color="danger" variant="solid">
            danger-solid
          </Button>

          <Button color="cyan" variant="solid">
            cyan-solid
          </Button>
        </Flex>

        <Flex gap={"small"} wrap>
          <Button color="default" variant="outlined">
            default-outlined
          </Button>

          <Button color="primary" variant="outlined">
            primary-outlined
          </Button>

          <Button color="danger" variant="outlined">
            danger-outlined
          </Button>

          <Button color="cyan" variant="outlined">
            cyan-outlined
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
