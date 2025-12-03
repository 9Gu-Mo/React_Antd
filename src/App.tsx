// lib
import { Outlet, useLocation } from "react-router-dom";
import { Flex } from "antd";

// component
import Header from "./components/Layout/Header";

export default function App() {
  const location = useLocation();

  // url로 header 노출 페이지 제어
  const isInfoPage = location.pathname === "/info"; // 사용자 정보 입력
  const isNoticePage = location.pathname === "/notice"; // 안내

  return (
    <>
      <Flex className="wrap" vertical>
        {isInfoPage || isNoticePage ? "" : <Header />}
        <Flex className="main" gap={40} vertical>
          <Outlet />
        </Flex>
      </Flex>
    </>
  );
}
