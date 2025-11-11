import Title from "antd/es/typography/Title";
import AntdInput from "../components/antd/AntdInput";
import BottomFixButton from "../components/common/BottomFixButton";

export default function About() {
  return (
    <>
      <strong>
        Code <em>AB206</em>
      </strong>
      <Title level={2}>신제품 개발 Spicy Mandu</Title>
      <p>Spicy Ingredient (A, B, C)</p>
      <AntdInput placeholder="닉네임을 입력해 주세요" />
      <BottomFixButton text="설문 시작" type="primary" />
    </>
  );
}
