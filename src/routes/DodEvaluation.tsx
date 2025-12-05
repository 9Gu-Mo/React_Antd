// lib
import { Button, Flex, Space } from "antd";
// import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";

// component
import BottomFixButton from "../components/common/BottomFixButton";
import Notice from "../components/common/Notice";
import SliderNineStep from "../components/common/SliderNineStep";
import TextArea from "antd/es/input/TextArea";

export default function DodEvaluation() {
  return (
    <>
      <div className="evaluation">
        <div className="inner">
          <Notice>
            <div>
              먼저 입을 헹군 후 화면에
              <b>
                <span>표시된 번호의 샘플을 시식</span>
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
                <Title level={4}>
                  다음 특성 각각에 대하여, 평가 샘플의 특성 강도를 Control 제품과 비교하여 평가해 주세요.
                </Title>
              </Flex>
            </Space>
            <SliderNineStep />
            <SliderNineStep />
            <SliderNineStep />
            <SliderNineStep />
          </div>
        </div>

        <div className="inner">
          <div className="content">
            <Space direction="vertical">
              <Flex>
                <em>Q.</em>
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>
                  특성별 강도 평가결과를 참고하여, 이 샘플의 Sensory Profile은 Control 대비 전반적으로 얼마나 차이가
                  있는지 평가해 주세요.
                </Title>
              </Flex>
            </Space>
            <SliderNineStep />
            <div className="tbl">
              <table>
                <colgroup>
                  <col width={"25%"} />
                  <col width={"75%"} />
                </colgroup>
                <thead>
                  <tr>
                    <th>점수</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>차이 전혀 없음</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>미세한 차이</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>중간정도의 차이</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>큰 차이</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>매우 큰 차이</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="content">
            <Space direction="vertical">
              <Flex>
                <em>Q.</em>
              </Flex>
              <Flex vertical gap={4}>
                <Title level={4}>개선됐으면 하는 방향이나 문제점에 대해 자유롭게 작성해 주세요.</Title>
              </Flex>
            </Space>
            <TextArea className="ant-input-textarea" placeholder="이 곳에 작성해주세요" />
          </div>
        </div>
      </div>
      <BottomFixButton text="다음" type="primary" disabled>
        <Button>이전</Button>
      </BottomFixButton>
    </>
  );
}
