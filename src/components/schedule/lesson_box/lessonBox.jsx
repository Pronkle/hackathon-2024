import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function LessonBox({ task, index }) {
    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    id="lessonBox-container"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
            <span>
              <small>
                #{task.id}
                  {"  "}
              </small>
            </span>
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "center", padding: 2 }}
                    >
                        <div>{task.title}</div>
                    </div>
                    <div className="lessonBox-icons">
                        <div>
                        </div>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
}