// lib
import { Button, Flex, Radio, Space, type RadioChangeEvent } from "antd";
import Title from "antd/es/typography/Title";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import Notice from "../components/common/Notice";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

export default function DodEvaluation2() {
  const [valueOutlined, setValueOutlined] = useState();

  const onChangeOutlined = (e: RadioChangeEvent) => {
    setValueOutlined(e.target.value);

    console.log(e.target.checked);
  };

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
