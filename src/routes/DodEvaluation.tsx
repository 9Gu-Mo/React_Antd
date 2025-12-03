// lib
import { Button, Flex, Space, Typography } from "antd";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import SliderFiveStep from "../components/common/SliderFiveStep";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import Notice from "../components/common/Notice";

export default function DodEvaluation() {
  return (
    <>
      <div className="evaluation">
        <Typography className="mb-12">제공된 샘플 간의 감각적 차이 정도를 평가를 위한 항목이예요.</Typography>
        <Notice>
          <div>
            <b>슈가맨</b>님! <br />
            먼저 입을 헹군 후에
            <b>
              <span>Control과 472샘플을 차례</span>
            </b>
            대로 시식해 주세요.
          </div>
        </Notice>

        <div className="content">
          <Space direction="vertical">
            <Flex>
              <em>Q.</em>
            </Flex>
            <Flex vertical gap={4}>
              <Title level={4}>시식한 472샘플이 Control과 비교하여 얼마나 다른지 평가해주세요.</Title>
            </Flex>
          </Space>
          <SliderFiveStep />
        </div>

        <div className="content">
          <Space direction="vertical">
            <Flex>
              <em>Q.</em>
            </Flex>
            <Flex vertical gap={4}>
              <Title level={4}>평가하신 구체적인 이유와 차이를 느낀 부분을 자유롭게 작성해 주세요.</Title>
            </Flex>
          </Space>
          <TextArea placeholder="이 곳에 작성해주세요" />
        </div>
      </div>
      <BottomFixButton text="다음" type="primary" disabled>
        <Button>이전</Button>
      </BottomFixButton>
    </>
  );
}
