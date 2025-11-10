import { Button, Flex, Modal } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";

export default function AntdModal() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Flex vertical>
        <Title level={2}>Modal</Title>
        <Button type="primary" onClick={openModal}>
          Open Modal
        </Button>
      </Flex>
      {open && (
        <Modal open={open} onCancel={closeModal}>
          <p>ss</p>
        </Modal>
      )}
    </>
  );
}
