import { Outlet } from "react-router-dom";
import { Flex } from "antd";

export default function App() {
  return (
    <>
      <Flex className="wrap" vertical>
        <main className="inner">
          {/* 각 페이지 렌더링 부분 */}
          <Outlet />
        </main>
      </Flex>
    </>
  );
}
