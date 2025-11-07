import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";

export default function DndEx() {
  const [items, setItems] = useState(["apple", "banana", "cherry"]);

  const handleDnd = (result: DropResult) => {
    if (!result.destination) return;
    const updated = Array.from(items);
    const [moved] = updated.splice(result.source.index, 1);
    updated.splice(result.destination.index, 0, moved);
    setItems(updated);
  };

  return (
    <>
      <Flex vertical gap={10}>
        <Title level={2}>Drag And Drop</Title>
        <DragDropContext onDragEnd={handleDnd}>
          <Droppable droppableId="fruit-list">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ width: 200 }}
              >
                {items.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          padding: "8px",
                          marginBottom: "8px",
                          background: "#fff",
                          border: "1px solid #ddd",
                          borderRadius: 4,
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Flex>
    </>
  );
}
