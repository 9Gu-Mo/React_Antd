// lib
import { Button, Flex, Radio, Space, Typography, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import TastingLabel from "../components/common/TastingLabel";
import Notice from "../components/common/Notice";
import SliderFifteenStep from "../components/common/SliderFifteenStep";

export default function CQEvaluation() {
  return (
    <>
      <div className="evaluation">
        <div className="inner">
          <Typography className="mb-12">샘플에 대한 ‘기호도’ 및 ‘맛의 강도’의 평가를 위한 항목이예요.</Typography>
          <Notice>
            <div>
              다음 질문은
              <span>시식 전/후 2단계로 진행</span>
              됩니다.
              <b>
                <span className="underline">시식하기 전</span>
              </b>
              에 아래 항목에 응답해주세요.
            </div>
          </Notice>

          <div className="content">
            <Space direction="vertical">
              <Flex align="center" gap={4}>
                <em>Q.</em>
                <TastingLabel />
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>샘플의 외형에 대해 어떻게 생각하시나요?</Title>
              </Flex>
            </Space>

            <Radio.Group
              className="rdo-custom"
              options={[
                { value: "rdo-1", label: "매우종지 않음" },
                { value: "rdo-2", label: "종지않음" },
                { value: "rdo-3", label: "보통" },
                { value: "rdo-4", label: "좋음" },
                { value: "rdo-5", label: "매우좋음" },
              ]}
            />
          </div>

          <div className="content">
            <Space direction="vertical">
              <Flex align="center" gap={4}>
                <em>Q.</em>
                <TastingLabel />
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>전반적으로 색상은 얼마나 좋습니까?</Title>
              </Flex>
            </Space>

            <Radio.Group
              className="rdo-custom"
              options={[
                { value: "rdo-1", label: "매우종지 않음" },
                { value: "rdo-2", label: "종지않음" },
                { value: "rdo-3", label: "보통" },
                { value: "rdo-4", label: "좋음" },
                { value: "rdo-5", label: "매우좋음" },
              ]}
            />
          </div>
        </div>

        <div className="inner">
          <Notice>
            <div>
              본 문항은
              <b>
                <span className="underline">시식 후 평가</span>
              </b>
              하는 항목입니다. 먼저 입을 헹군 후에 제품을 시식해주세요.
            </div>
          </Notice>

          <div className="content">
            <Space direction="vertical">
              <Flex align="center" gap={4}>
                <em>Q.</em>
                <TastingLabel after />
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>짠맛의 강도는 얼마나 강한가요?</Title>
              </Flex>
            </Space>

            <SliderFifteenStep />
          </div>

          <div className="content">
            <Space direction="vertical">
              <Flex align="center" gap={4}>
                <em>Q.</em>
                <TastingLabel after />
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>좋은 점과 개선할 사항을 자유롭게 적아주세요.</Title>
              </Flex>
            </Space>
            <Form.Item label="좋은점">
              <TextArea placeholder="이 곳에 작성해주세요" />
            </Form.Item>
            <Form.Item label="개선 할 점">
              <TextArea placeholder="이 곳에 작성해주세요" />
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
