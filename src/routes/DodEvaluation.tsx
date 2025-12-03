// lib
import { Button, Flex, Typography } from "antd";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import SliderFiveStep from "../components/common/SliderFiveStep";
import TextArea from "antd/es/input/TextArea";

export default function DodEvaluation() {
  return (
    <>
      <div className="evaluation">
        <Typography>제공된 샘플 간의 감각적 차이 정도를 평가를 위한 항목이예요.</Typography>
        <Flex gap={12} align="center">
          <img src="/icon-excl-mark.svg" alt="" />
          <div className="text">
            <b>슈가맨</b>님! <br />
            먼저 입을 헹군 후에
            <b>
              <span>Control과 472샘플을 차례</span>
            </b>
            대로 시식해 주세요.
          </div>
        </Flex>

        <div className="content">
          <Flex>
            <em>Q.</em>
          </Flex>
          <b>시식한 472샘플이 Control과 비교하여 얼마나 다른지 평가해주세요.</b>
          <SliderFiveStep />
        </div>

        <div className="content">
          <Flex>
            <em>Q.</em>
          </Flex>
          <b>평가하신 구체적인 이유와 차이를 느낀 부분을 자유롭게 작성해 주세요.</b>
          <TextArea />
        </div>
      </div>
      <BottomFixButton text="다음" type="primary" disabled>
        <Button>이전</Button>
      </BottomFixButton>
    </>
  );
}
