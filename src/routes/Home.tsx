import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

// root
export default function Home() {
  return (
    <>
      <Flex vertical align="center" className="intro">
        <Title level={1}>
          안녕하세요!
          <br />
          <b>
            <span>CJ SENSORY TEST</span>에 오신걸 환영합니다.
          </b>
        </Title>
        <Flex gap={60}>
          <div className="card generation">
            <Link to={"/common"}>
              <b>Create Survey</b>
              <strong>
                설문지 <em>생성</em>
              </strong>
              <p>
                설문지 생성하고 관리할 수 있습니다.
                <br />
                설문 답변에 대한 데이터와 보고서를 제공하고
                <br />
                신규 제품에 대한 설문 평가를 진행할 수 있습니다.
              </p>
            </Link>
          </div>
          <div className="card participation">
            <Link to={"/"}>
              <b>Survey Participation</b>
              <strong>
                설문지 <em>참여</em>
              </strong>
              <p>
                신규 제품에 대한 테스트를 진행합니다.
                <br /> 유사 제품과 신규 제품을 비교하고 평가하여
                <br /> 더 나은 제품을 만들기 위한 소중한 정보로 활용됩니다.
              </p>
            </Link>
          </div>
        </Flex>
      </Flex>
    </>
  );
}
