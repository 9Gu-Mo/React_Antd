import { Button, Flex, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import AntdInput from "../antd/AntdInput";

export default function AntdInputWrap() {
  return (
    <>
      <Flex vertical gap={10}>
        <Title level={2}>Input</Title>
        <Form>
          <Form.Item name={"userId"} rules={[{ required: true, message: "ID를 입력해주세요." }]}>
            <Input placeholder="id" count={{ show: true, max: 10 }} />
          </Form.Item>
          <Form.Item name={"userPassword"} rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}>
            <Input.Password placeholder="password" type="password" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">입력값 전송</Button>
          </Form.Item>
          <AntdInput
            rules={[
              {
                required: true,
                message: "아이디를 입력해주세요.",
              },
            ]}
            placeholder="ss"
            name="test"
            showCount
            maxLength={10}
            allowClear
          />
        </Form>
      </Flex>
    </>
  );
}
