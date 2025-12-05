// lib
import { Button, Flex, Space } from "antd";
import Title from "antd/es/typography/Title";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import Notice from "../components/common/Notice";
import TextArea from "antd/es/input/TextArea";

export default function DodEvaluation3() {
  return (
    <>
      <div className="evaluation">
        <Notice>
          <div>
            먼저 입을 헹군 후에 화면에 <b>표시된 순서대로</b>
            <b>
              <span>왼쪽부터 샘플을 시식</span>
            </b>
            해 주세요.
          </div>
        </Notice>

        <div className="content">
          <Space direction="vertical">
            <Flex>
              <em>Q.</em>
            </Flex>
            <Flex vertical gap={4}>
              <Title level={4}>제시된 샘플의 순위를 입력해 주세요.</Title>
            </Flex>
          </Space>
          <div className="dnd">
            <Flex gap={12} wrap>
              <span>472</span>
              <span>195</span>
              <span>218</span>
              <span>643</span>
              <span>643</span>
            </Flex>
          </div>
        </div>

        <div className="content">
          <Space direction="vertical">
            <Flex>
              <em>Q.</em>
            </Flex>
            <Flex vertical gap={4}>
              <Title level={4}>해당 제품을 더 선호하는 이유가 있다면 작성해 주세요.</Title>
            </Flex>
          </Space>
          <TextArea className="ant-input-textarea" placeholder="이 곳에 작성해주세요" />
        </div>
      </div>
      <BottomFixButton text="다음" type="primary" disabled>
        <Button>이전</Button>
      </BottomFixButton>
    </>
  );
}
