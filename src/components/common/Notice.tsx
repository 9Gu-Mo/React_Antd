import { Flex } from "antd";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Notice(props: Props) {
  return (
    <>
      <Flex gap={12} align="center" className="notice">
        <img src="/icon-excl-mark.svg" alt="" />
        {props.children}
      </Flex>
    </>
  );
}
