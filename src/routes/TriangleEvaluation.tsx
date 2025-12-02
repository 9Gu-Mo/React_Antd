// lib
import { Button, Flex, Radio, type RadioChangeEvent } from "antd";
import BottomFixButton from "../components/common/BottomFixButton";
import { useState } from "react";

export default function TriangleEvaluation() {
  const [valueOutlined, setValueOutlined] = useState();

  const onChangeOutlined = (e: RadioChangeEvent) => {
    setValueOutlined(e.target.value);
  };

  return (
    <>
      <div className="evaluation">
        <Flex gap={12} align="center">
          <img src="/icon-excl-mark.svg" alt="" />
          <div className="text">
            <b>슈가맨</b>님! <br />
            먼저 입을 헹군 후에 화면에
            <b>
              표시된 순서대로 <span>왼쪽부터 샘플을 시식</span>
            </b>
            해 주세요.
          </div>
        </Flex>

        <div className="content">
          <Flex>
            <em>Q.</em>
          </Flex>
          <b>3개 샘플 중 다른 하나가 무엇인지 선택해주세요.</b>
          <p>(3개 중 2개가 동일하며, 나머지 1개가 다릅니다.)</p>
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
      <BottomFixButton text="다음" type="primary" disabled>
        <Button>이전</Button>
      </BottomFixButton>
    </>
  );
}
