import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";

type ListsState = Record<string, { id: string; text: string }[]>;

const initial: ListsState = {
  left: [
    { id: "a", text: "Apple 🍎" },
    { id: "b", text: "Banana 🍌" },
    { id: "c", text: "Cherry 🍒" },
  ],
  right: [
    { id: "d", text: "Grape 🍇" },
    { id: "e", text: "Lemon 🍋" },
  ],
};

const reorder = <T,>(list: T[], startIndex: number, endIndex: number): T[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const move = <T,>(
  sourceList: T[],
  destList: T[],
  sourceIndex: number,
  destIndex: number
): { source: T[]; destination: T[] } => {
  const sourceClone = Array.from(sourceList);
  const destClone = Array.from(destList);
  const [moved] = sourceClone.splice(sourceIndex, 1);
  destClone.splice(destIndex, 0, moved);
  return { source: sourceClone, destination: destClone };
};
export default function DndEx() {
  const [lists, setLists] = useState<ListsState>(initial);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return; // drop이 없으면 취소

    const sourceId = source.droppableId;
    const destId = destination.droppableId;

    // 같은 리스트 내에서 순서 변경
    if (sourceId === destId) {
      const newList = reorder(lists[sourceId], source.index, destination.index);

      setLists((prev) => ({
        ...prev,
        [sourceId]: newList,
      }));
      return;
    }

    // 다른 리스트로 이동
    const { source: newSource, destination: newDest } = move(
      lists[sourceId],
      lists[destId],
      source.index,
      destination.index
    );

    // **기존 상태와 병합**하여 덮어쓰지 않음
    setLists((prev) => ({
      ...prev,
      [sourceId]: newSource,
      [destId]: newDest,
    }));
  };

  return (
    <>
      <Flex vertical gap={10}>
        <Title level={2}>Drag And Drop</Title>
        <DragDropContext onDragEnd={onDragEnd}>
          <div
            style={{
              display: "flex",
              gap: 32,
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            {(["left", "right"] as const).map((droppableId) => (
              <Droppable key={droppableId} droppableId={droppableId}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      width: 260,
                      minHeight: 260,
                      padding: 12,
                      borderRadius: 8,
                      background: snapshot.isDraggingOver
                        ? "#e6f7ff"
                        : "#fafafa",
                      border: "1px solid #ddd",
                    }}
                  >
                    <h4 style={{ textAlign: "center", marginTop: 0 }}>
                      {droppableId === "left" ? "왼쪽 리스트" : "오른쪽 리스트"}
                    </h4>

                    {lists[droppableId].map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              userSelect: "none",
                              padding: "10px 12px",
                              margin: "8px 0",
                              borderRadius: 6,
                              border: "1px solid #e6e6e6",
                              background: snapshot.isDragging
                                ? "#bae7ff"
                                : "#fff",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.text}
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </Flex>
    </>
  );
}
