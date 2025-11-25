import { Button, Flex, Input } from "antd";
import { useEffect, useRef, useState } from "react";

export default function TableCoales() {
  const [open, setOpen] = useState(false);

  const tblRef = useRef<HTMLTableSectionElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (tblRef.current) {
      if (open) {
        const scrollHeight = tblRef.current.scrollHeight;
        setHeight(scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [open]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleClick}>{open ? "접기" : "펼치기"}</button>
      <div className="tbl">
        <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
          <colgroup>
            <col style={{ width: "16.6666%" }} />
            <col style={{ width: "16.6666%" }} />
            <col style={{ width: "16.6666%" }} />
            <col style={{ width: "16.6666%" }} />
            <col style={{ width: "16.6666%" }} />
            <col style={{ width: "16.6666%" }} />
          </colgroup>
          <tbody>
            <tr>
              <th>조사명</th>
              <td colSpan={2}>조사명 입니다.</td>
              <th>조사모듈</th>
              <td colSpan={2}>Triangle</td>
            </tr>
            <tr>
              <th>조사 시작일자</th>
              <td colSpan={2}>2025-01-01</td>
              <th>패널 수</th>
              <td colSpan={2}>100</td>
            </tr>
            <tr>
              <th>Description</th>
              <td colSpan={5}>설명설명설명설명설명설명설명설명</td>
            </tr>
            <tr>
              <th>Description</th>
              <td colSpan={5}>설명설명설명설명설명설명설명설명</td>
            </tr>
            <tr>
              <th>응답수</th>
              <td colSpan={2}>120</td>
              <th>데이터 유의성 여부</th>
              <td colSpan={2}>o</td>
            </tr>
          </tbody>
          {open && (
            <tbody ref={tblRef} style={{ height: height }}>
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
                <td colSpan={2}>aabbccdd</td>
                <th>조사 tag</th>
                <td colSpan={2}>
                  새우 왕교자새우 왕교자새우 왕교자새우 왕교자새우 왕교자새우 왕교자새우 왕교자새우 왕교자
                </td>
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
          )}
        </table>
      </div>
    </div>
  );
}
