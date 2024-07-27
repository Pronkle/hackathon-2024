import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./style.css"
import { Link } from "react-router-dom";

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
                    <div id="lessonBox-info" >
                        <div id="lessonBox-subject">{task.subject}</div>
                        <div id="lessonBox-title">{task.title}</div>
                    </div>
                    {/* <div className="lessonBox-icons">
                        <div>
                        </div>
                    </div> */}

                    <div className="lessonBox-interact">
                        <div id="lessonBox-go">
                            <Link to="/lesson" state={{subject: task.title}}>Start</Link>
                        </div>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
}