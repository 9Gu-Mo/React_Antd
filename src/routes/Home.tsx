// lib
import { Flex, Form, Input, Radio, type RadioChangeEvent } from "antd";
import Typography from "antd/es/typography/Typography";

// hook
import { useState } from "react";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import IconGlobal from "../components/Icon/IconGlobal";
import IconArrowDown from "../components/Icon/IconArrowDown";
import BottomModal from "../components/common/modal/BottomModal";
import AlertModal from "../components/common/modal/AlertModal";

// root
export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const modalOpen = () => {
    setAlert(!alert);
  };

  return (
    <>
      <Flex className="login" vertical>
        <div>
          <div className="logo mb-12">
            <img src="logo.png" alt="" />
          </div>
          <Typography>설문 담당자에게 전달받은 코드를 입력해주세요.</Typography>

          <Form layout="vertical">
            <Form.Item label="코드" className="mt-60">
              <Input.OTP length={5} formatter={(str) => str.toUpperCase()} />
            </Form.Item>
          </Form>
        </div>

        <button type="button" onClick={handleOpen}>
          <Flex align="center" gap={4}>
            <IconGlobal />
            <em>KR</em>
          </Flex>
          <IconArrowDown />
        </button>

        <BottomModal
          title="언어 변경"
          open={open}
          placement="bottom"
          onClose={() => {
            setOpen(false);
          }}
          height={332}
        >
          <Radio.Group
            value={value}
            onChange={onChange}
            block
            optionType="button"
            buttonStyle="solid"
            options={[
              { value: "EN", label: "EN" },
              { value: "CN", label: "CN" },
              { value: "JP", label: "JP" },
              { value: "VN", label: "VN" },
            ]}
          />
        </BottomModal>
      </Flex>
      <AlertModal
        onOk={() => {
          setAlert(false);
        }}
        open={alert}
      >
        유효하지 않은 코드 입니다.
        <br />
        확인 후 다시 입력해 주세요.
      </AlertModal>
      <BottomFixButton text="확인" type="primary" onClick={modalOpen} />
    </>
  );
}
