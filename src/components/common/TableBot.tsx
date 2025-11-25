import { Button, Flex, Input } from "antd";

export default function TableBot() {
  return (
    <>
      <div className={`tbl`}>
        <table>
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "18.3333%%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "18.3333%%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "18.3333%%" }} />
          </colgroup>
          <tbody>
            <tr>
              <th>조사 목적</th>
              <td>원료/공정 변경점</td>
              <th>조사 국가</th>
              <td>한국</td>
              <th>샘플 제시 순서</th>
              <td>Random</td>
            </tr>
            <tr>
              <th>과제코드</th>
              <td colSpan={3}>aabbccdd</td>
              <th>조사 tag</th>
              <td>새우 왕교자새우 왕교자새우 왕교자새우 왕교자새우 왕교자새우 왕교자새우 왕교자새우 왕교자</td>
            </tr>
            <tr>
              <th>Note</th>
              <td colSpan={5}>
                <Flex>
                  <Input type="text" />
                  <Button type="primary" title="저장">
                    저장
                  </Button>
                </Flex>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
