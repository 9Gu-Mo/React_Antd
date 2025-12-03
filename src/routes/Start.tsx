// lib
import Title from "antd/es/typography/Title";
import { Button, Typography } from "antd";
import BottomFixButton from "../components/common/BottomFixButton";

const { Text } = Typography;

export default function Start() {
  return (
    <>
      <div className="start">
        <img src="/bg.png" alt="안내 배경 이미지" />

        <div className="start-inner">
          <Title level={3}>안녕하세요</Title>
          <Text>
            테스트에 앞서 물을 준비해주세요.
            <br />각 단계별 시식 전에 입을 꼭 행궈주세요.
            <br />
            준비되었으면 시작할게요!
          </Text>
        </div>
      </div>
      <BottomFixButton text="조사 시작" type="primary">
        <Button>이전</Button>
      </BottomFixButton>
    </>
  );
}
