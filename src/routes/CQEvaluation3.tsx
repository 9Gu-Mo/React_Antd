// lib
import { Button, Flex, Space, Form, Radio, type RadioChangeEvent } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import TastingLabel from "../components/common/TastingLabel";
import Notice from "../components/common/Notice";
import SliderFiveStep from "../components/common/SliderFiveStep";
import { useState } from "react";

export default function CQEvaluation3() {
  const [valueOutlined, setValueOutlined] = useState();

  const onChangeOutlined = (e: RadioChangeEvent) => {
    setValueOutlined(e.target.value);

    console.log(e.target.checked);
  };

  return (
    <>
      <div className="evaluation">
        <div className="inner">
          <Notice>
            <div>
              먼저 입을 헹군 후에 화면에 표시된 순서대로
              <span>왼쪽부터 샘플을 시식</span>해 주세요.
            </div>
          </Notice>

          <div className="content">
            <Space direction="vertical">
              <Flex align="center" gap={4}>
                <em>Q.</em>
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>두가지 제품 중 더 선호하는 샘플을 선택해 주세요.</Title>
              </Flex>
            </Space>
            <Radio.Group
              className="rdo-button"
              block
              optionType="button"
              value={valueOutlined}
              onChange={onChangeOutlined}
              options={[
                { value: "472", label: "472" },
                { value: "195", label: "195" },
              ]}
            />
          </div>

          <div className="content">
            <Space direction="vertical">
              <Flex align="center" gap={4}>
                <em>Q.</em>
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>해당 제품을 더 선호하는 이유가 있다면 작성해 주세요.</Title>
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
      <BottomFixButton text="제출" type="primary">
        <Button>이전</Button>
      </BottomFixButton>
    </>
  );
}
