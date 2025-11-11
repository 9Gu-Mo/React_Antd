import { Outlet, useLocation } from "react-router-dom";
import { Flex } from "antd";
import Header from "./components/Layout/Header";

export default function App() {
  const location = useLocation();
  const isIntroPage = location.pathname === "/";

  return (
    <>
      <Flex className={isIntroPage ? "" : "wrap"} vertical>
        {isIntroPage ? <Header intro /> : <Header />}
        <main className={isIntroPage ? "" : "inner"}>
          {/* 각 페이지 렌더링 부분 */}
          <Outlet />
        </main>
      </Flex>
    </>
  );
}
