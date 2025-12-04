import { Drawer } from "antd";
import { type ReactNode } from "react";
import IconClose from "../../Icon/IconClose";

interface Props {
  title: string;
  open: boolean;
  placement?: "left" | "top" | "right" | "bottom";
  children: ReactNode;
  height: number;
  onClose: (e: React.MouseEvent<Element> | React.KeyboardEvent<Element>) => void;
}

export default function BottomModal(props: Props) {
  return (
    <>
      <Drawer
        title={props.title}
        open={props.open}
        placement={props.placement}
        onClose={props.onClose}
        closeIcon={<IconClose />}
        height={props.height}
        className="modal-bottom"
      >
        {props.children}
      </Drawer>
    </>
  );
}
