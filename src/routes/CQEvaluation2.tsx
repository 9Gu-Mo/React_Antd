// lib
import { Button, Flex, Space, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import TastingLabel from "../components/common/TastingLabel";
import Notice from "../components/common/Notice";
import SliderFiveStep from "../components/common/SliderFiveStep";

export default function CQEvaluation2() {
  return (
    <>
      <div className="evaluation">
        <div className="inner">
          <Notice>
            <div>
              다음 질문은
              <span>시식 후</span>에 응답해 주시기 바라며, 해당하는 항목을 선택해 주시기 바랍니다.
            </div>
          </Notice>

          <div className="content">
            <Space direction="vertical">
              <Flex align="center" gap={4}>
                <em>Q.</em>
                <TastingLabel after />
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>샘플은 전반적으로 얼마나 좋습니까?</Title>
              </Flex>
            </Space>
            <SliderFiveStep />
          </div>

          <div className="content">
            <Space direction="vertical">
              <Flex align="center" gap={4}>
                <em>Q.</em>
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>전반기호도를 평가한 이유에 대해서 작성해 주세요.</Title>
              </Flex>
            </Space>
            <Form.Item>
              <TextArea className="ant-input-textarea" placeholder="이 곳에 작성해주세요" />
            </Form.Item>
          </div>
        </div>

        <div className="inner">
          <div className="content">
            <Space direction="vertical">
              <Flex align="center" gap={4}>
                <em>Q.</em>
                <TastingLabel after />
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>샘플의 짠맛, 단맛, 신맛은 얼마나 강합니까?</Title>
              </Flex>
            </Space>

            <SliderFiveStep />
          </div>

          <div className="content">
            <Space direction="vertical">
              <Flex align="center" gap={4}>
                <em>Q.</em>
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>개선됐으면 하는 방향이나 문제점에 대해 자유롭게 작성해 주세요.</Title>
              </Flex>
            </Space>
            <Form.Item>
              <TextArea className="ant-input-textarea" placeholder="이 곳에 작성해주세요" />
            </Form.Item>
          </div>
        </div>
      </div>
      <BottomFixButton text="다음" type="primary" disabled>
        <Button>이전</Button>
      </BottomFixButton>
    </>
  );
}
