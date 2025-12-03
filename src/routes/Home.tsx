import { Flex, Form, Input } from "antd";
import type { OTPProps } from "antd/es/input/OTP";
import Typography from "antd/es/typography/Typography";
import BottomFixButton from "../components/common/BottomFixButton";
import IconGlobal from "../components/Icon/IconGlobal";
import IconArrowDown from "../components/Icon/IconArrowDown";

// root
export default function Home() {
  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const onInput: OTPProps["onInput"] = (value) => {
    console.log("onInput:", value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <>
      <Flex className="login" vertical>
        <div>
          <div className="logo mb-12">
            <img src="logo.png" alt="" />
          </div>
          <Typography>설문 담당자에게 전달받은 코드를 입력해주세요.</Typography>

          <Form.Item label="코드" className="mt-60">
            <Input.OTP length={5} formatter={(str) => str.toUpperCase()} {...sharedProps} />
          </Form.Item>
        </div>

        <button type="button">
          <Flex align="center" gap={4}>
            <IconGlobal />
            <em>KR</em>
          </Flex>
          <IconArrowDown />
        </button>
      </Flex>
      <BottomFixButton text="확인" type="primary" />
    </>
  );
}
