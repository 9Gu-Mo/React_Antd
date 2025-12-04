import { Modal } from "antd";
import type { ReactNode } from "react";

interface Props {
  title?: string;
  children?: ReactNode;
  onOk: (e: React.MouseEvent<Element> | React.KeyboardEvent<Element>) => void;
  open: boolean;
}

export default function AlertModal(props: Props) {
  return (
    <>
      <Modal
        okText="확인"
        closable={false}
        open={props.open}
        cancelButtonProps={{ style: { display: "none" } }}
        onOk={props.onOk}
        className="modal-alert"
      >
        {props.children}
      </Modal>
    </>
  );
}
