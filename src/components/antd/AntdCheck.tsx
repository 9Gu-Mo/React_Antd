import { Checkbox, type CheckboxOptionType } from "antd";

interface Props {
  options: CheckboxOptionType<string>[];
  name?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string[];
  onChange?: (checkedValues: string[]) => void;
}

type ButtonStyleProps =
  | { button?: false; solid?: never; outlined?: never }
  | { button: true; solid?: boolean; outlined?: never }
  | { button: true; outlined?: boolean; solid?: never };

type mixture = Props & ButtonStyleProps;

export default function AntdCheck(props: mixture) {
  return (
    <>
      <Checkbox.Group
        options={props.options}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        className={`${
          props.button ? `chk-button ${props.solid ? "solid" : ""} ${props.outlined ? "outlined" : ""}` : ""
        }`}
        disabled={props.disabled}
      />
    </>
  );
}
