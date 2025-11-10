import { Button, Flex, Modal, Steps } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";

export default function AntdSteps() {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const contentSteps = [
    {
      id: "0",
      title: "First",
      content: "content1",
    },
    {
      id: "1",
      title: "Second",
      content: "content2",
    },
    {
      id: "2",
      title: "Last",
      content: "content3",
    },
  ];

  const modalCancel = () => {
    setOpen(false);
  };

  const nextSteps = () => {
    setCurrent(current + 1);
    if (contentSteps.length - 1 === current) {
      setOpen(true);
      setCurrent(current);
    }
    console.log("contentSteps.length", contentSteps.length);
    console.log("current", current);
  };

  const prevSteps = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Flex vertical gap={10}>
        <Title level={2}>Steps</Title>
        <Flex vertical>
          <Title level={4}>default</Title>
        </Flex>
        <Steps
          current={1}
          responsive={false}
          items={[
            {
              title: "step1",
              description: "step1 완료",
            },
            {
              title: "step2",
              description: "step2 진행중",
            },
          ]}
        />
        <Flex vertical gap={5}>
          <Title level={4}>with content</Title>
          <Steps
            current={current}
            responsive={false}
            items={contentSteps.map((item) => ({
              key: item.id,
              title: item.title,
            }))}
          />
          <div>{contentSteps[current].content}</div>
          <Flex gap={10}>
            {current > 0 && (
              <Button
                block
                htmlType="button"
                onClick={prevSteps}
                color="default"
                variant="outlined"
              >
                prev
              </Button>
            )}
            <Button
              block
              htmlType="button"
              onClick={nextSteps}
              color="primary"
              variant="solid"
            >
              {current === contentSteps.length - 1 ? "done" : "next"}
            </Button>
            {open && (
              <Modal
                title="모달 타이틀"
                open={open}
                closable
                onOk={modalCancel}
                onCancel={modalCancel}
              >
                <p>작성이 완료됐습니다.</p>
              </Modal>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
