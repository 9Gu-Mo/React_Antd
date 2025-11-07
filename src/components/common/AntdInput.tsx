import { Button, Flex, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import style from "@/styles/input.module.scss";

export default function AntdInput() {
  return (
    <>
      <Flex vertical gap={10} className={style.inputWrap}>
        <Title level={2}>Input</Title>
        <Form>
          <Form.Item
            name={"userId"}
            rules={[{ required: true, message: "ID를 입력해주세요." }]}
          >
            <Input placeholder="id" />
          </Form.Item>
          <Form.Item
            name={"userPassword"}
            rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
          >
            <Input.Password placeholder="password" type="password" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">입력값 전송</Button>
          </Form.Item>
        </Form>
      </Flex>
    </>
  );
}
