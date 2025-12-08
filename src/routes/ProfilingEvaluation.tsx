// lib
import { Button, Flex, Space, Form, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import Notice from "../components/common/Notice";
import SliderTenStep from "../components/common/SliderTenStep";

export default function ProfilingEvaluation() {
  return (
    <>
      <div className="evaluation">
        <Notice>
          <div>
            먼저 입을 헹군 후에 화면에
            <b>
              표시된 번호의 <span>샘플을 시식</span>
            </b>
            해 주세요.
          </div>
        </Notice>

        <div className="content">
          <Space direction="vertical">
            <Flex align="center" gap={4}>
              <em>Q.</em>
            </Flex>
            <Flex vertical gap={4}>
              <Title level={4}>샘플에서 느껴지는 특성 강도를 평가해주세요.</Title>
              <Typography>{`인지되지 않음(0), 약함 < - >강함`}</Typography>
            </Flex>
          </Space>
          <SliderTenStep />
          <SliderTenStep />
          <SliderTenStep />
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
      <BottomFixButton text="제출" type="primary" disabled>
        <Button>이전</Button>
      </BottomFixButton>
    </>
  );
}
