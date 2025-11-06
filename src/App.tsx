import { Outlet } from "react-router-dom";
import { Flex } from "antd";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

export default function App() {
  return (
    <>
      <Flex className="wrap" vertical>
        <Header />
        <main className="inner">
          {/* 각 페이지 렌더링 부분 */}
          <Outlet />
        </main>
        <Footer />
      </Flex>
    </>
  );
}
