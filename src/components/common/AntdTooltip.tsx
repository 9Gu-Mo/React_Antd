import { Tooltip } from "antd";

export default function AntdTooltip() {
  return (
    <>
      <Tooltip overlayClassName="test" placement="bottom" trigger="click" title="Control과 거의 동일하며 차이없음">
        <button type="button">아이콘</button>
      </Tooltip>
    </>
  );
}
