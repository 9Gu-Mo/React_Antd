export default function TableTop() {
  return (
    <>
      <div className="tbl">
        <table>
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "35%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "35%" }} />
          </colgroup>
          <tbody>
            <tr>
              <th>조사명</th>
              <td>조사명 입니다.</td>
              <th>조사모듈</th>
              <td>Triangle</td>
            </tr>
            <tr>
              <th>조사 시작일자</th>
              <td>2025-01-01</td>
              <th>패널 수</th>
              <td>100</td>
            </tr>
            <tr>
              <th>Description</th>
              <td colSpan={3}>설명설명설명설명설명설명설명설명</td>
            </tr>
            <tr>
              <th>Description</th>
              <td colSpan={3}>설명설명설명설명설명설명설명설명</td>
            </tr>
            <tr>
              <th>응답수</th>
              <td>120</td>
              <th>데이터 유의성 여부</th>
              <td>o</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
