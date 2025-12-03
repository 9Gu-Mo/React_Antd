// lib
import { Outlet, useLocation } from "react-router-dom";
import { Flex } from "antd";

// component
import Header from "./components/Layout/Header";

export default function App() {
  const location = useLocation();

  // url로 header 노출 페이지 제어
  const isInfo = location.pathname === "/info"; // 사용자 정보 입력
  const isHome = location.pathname === "/"; // 사용자로그인

  return (
    <>
      <Flex className="wrap" vertical>
        {isInfo || isHome ? "" : <Header />}
        <Flex className="main" gap={40} vertical>
          <Outlet />
        </Flex>
      </Flex>
    </>
  );
}
