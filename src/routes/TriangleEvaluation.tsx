// lib
import { Button, Flex, Radio, Space, Typography, type RadioChangeEvent } from "antd";

// hook
import { useState } from "react";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import Title from "antd/es/typography/Title";
import Notice from "../components/common/Notice";

export default function TriangleEvaluation() {
  const [valueOutlined, setValueOutlined] = useState();

  const onChangeOutlined = (e: RadioChangeEvent) => {
    setValueOutlined(e.target.value);

    // rdo checked
    console.log(e.target.checked);
  };

  return (
    <>
      <div className="evaluation">
        <Notice>
          <div>
            <b>슈가맨</b>님! <br />
            먼저 입을 헹군 후에 화면에
            <b>
              표시된 순서대로 <span>왼쪽부터 샘플을 시식</span>
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
              <Title level={4}>3개 샘플 중 다른 하나가 무엇인지 선택해주세요.</Title>
              <Typography>(3개 중 2개가 동일하며, 나머지 1개가 다릅니다.)</Typography>
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
              { value: "218", label: "218" },
            ]}
          />
        </div>
      </div>
      <BottomFixButton text="다음" type="primary" disabled={!valueOutlined}>
        <Button>이전</Button>
      </BottomFixButton>
    </>
  );
}
