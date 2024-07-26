import React from "react";
import "./style.css";
import { StrictModeDroppable } from "../../../utils";

import LessonBox from "../lesson_box/lessonBox";

export default function Column({ title, tasks, id }) {
    return (
        <div className="column">
            <h3 id="column-title"
                style={{
                    backgroundColor: "lightblue",
                    position: "sticky",
                    top: "0",
                }}
            >
                {title}
            </h3>
            <StrictModeDroppable droppableId={id}>
                {(provided, snapshot) => (
                    <div
                        className="column-list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task, index) => (
                            <LessonBox key={index} index={index} task={task} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </StrictModeDroppable>
        </div>
    );
}