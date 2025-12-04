import { Button, Flex } from "antd";
import type { ReactNode } from "react";
import type { ButtonProps } from "antd";
import type { MouseEventHandler } from "react";

interface Props {
  text?: ReactNode;
  htmlType?: ButtonProps["htmlType"];
  color?: ButtonProps["color"];
  variant?: ButtonProps["variant"];
  type?: ButtonProps["type"];
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function BottomFixButton(props: Props) {
  return (
    <>
      <Flex className="bottom-fix" gap={props.children ? 8 : ""}>
        {/* 1줄 2개짜리 추가 props */}
        {props.children}
        <Button
          type={props.type}
          className={props.className}
          variant={props.variant}
          color={props.color}
          htmlType={props.htmlType}
          disabled={props.disabled}
          onClick={props.onClick}
        >
          {props.text}
        </Button>
      </Flex>
    </>
  );
}
