import { Button, Flex } from "antd";
import type { ReactNode } from "react";
import type { ButtonProps } from "antd";

interface Props {
  text?: ReactNode;
  htmlType?: ButtonProps["htmlType"];
  color?: ButtonProps["color"];
  variant?: ButtonProps["variant"];
  type?: ButtonProps["type"];
  className?: string;
}

export default function BottomFixButton(props: Props) {
  return (
    <>
      <Flex className="bottom-fix">
        <Button
          type={props.type}
          className={props.className}
          variant={props.variant}
          color={props.color}
          htmlType={props.htmlType}
        >
          {props.text}
        </Button>
      </Flex>
    </>
  );
}
