// lib
import Title from "antd/es/typography/Title";
import { Typography } from "antd";

// component
import AntdInput from "../components/antd/AntdInput";
import BottomFixButton from "../components/common/BottomFixButton";

const { Text } = Typography;

export default function Info() {
  return (
    <>
      <div className="content">
        <Title level={3} className="ft-cl-light-gray">
          Code <span className="ft-cl-primary">AB206</span>
        </Title>
        <Title level={2} className="product">
          신제품 개발
          <br />
          Spicy Mandu
        </Title>
        <Text>Spicy Ingredient (A, B, C)</Text>
        <AntdInput classNmae="mt-60" placeholder="닉네임을 입력해 주세요" label="닉네임" />
      </div>
      <BottomFixButton text="설문 시작" type="primary" />
    </>
  );
}
