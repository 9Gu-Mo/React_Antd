import { Form, Input } from "antd";
import type { Rule } from "antd/es/form";
import type { ReactNode } from "react";

interface Props {
  placeholder?: string;
  type?: string;
  readonly?: boolean;
  rules?: Rule[];
  name?: string;
  disabled?: boolean;
  label?: string;
  showCount?: boolean;
  maxLength?: number;
  allowClear?: boolean;
  prefix?: ReactNode;
}

export default function AntdInput(props: Props) {
  return (
    <>
      <Form.Item label={props.label} name={props.name} rules={props.rules}>
        <Input
          placeholder={props.placeholder}
          type={props.type}
          readOnly={props.readonly}
          disabled={props.disabled}
          showCount={props.showCount}
          maxLength={props.maxLength}
          allowClear={props.allowClear}
          prefix={props.prefix}
        />
      </Form.Item>
    </>
  );
}
