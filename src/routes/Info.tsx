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
      <div className="info">
        <Title level={3} className="ft-cl-light-gray ft-al-cn">
          Code <span className="ft-cl-primary">AB206</span>
        </Title>
        <Title level={2} className="product ft-al-cn">
          신제품 개발
          <br />
          Spicy Mandu
        </Title>
        <Text className="ft-al-cn">Spicy Ingredient (A, B, C)</Text>
        <AntdInput classNmae="mt-60" placeholder="이름을 입력해 주세요" label="이름" />
      </div>
      <BottomFixButton text="설문 시작" type="primary" />
    </>
  );
}
