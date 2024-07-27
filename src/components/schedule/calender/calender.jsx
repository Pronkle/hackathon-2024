import React, { useLayoutEffect, useEffect, useState } from "react"
import { DragDropContext } from "react-beautiful-dnd";
import { gsap } from 'gsap'
import Column from "../column/column";

import "./style.css"
import { useNavigate } from "react-router-dom";


export default function Calender({level}) {
    const navigate = useNavigate()

    const [monday, setMonday] = useState([]);
    const [tuesday, setTuesday] = useState([]);
    const [wednesday, setWednesday] = useState([]);
    const [thursday, setThursday] = useState([]);
    const [friday, setFriday] = useState([]);

    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //       gsap.from("#lessonBox-container", {
    //           transform: "translate(0, 200px)",
    //       })
    
    //     return () => ctx.revert(); // <- cleanup!
    //   })})

    const generateSchedule = () => {
        console.log(level)
        if (level === null) {
            navigate("/diagnostic")
            alert("Please Take a Diagnostic Test First!")
            return
        }

        setMonday([
            {
                id: 1,
                title: "Algebra I",
                subject: "Math",
                completed: false
            }
        ])
        setTuesday([
            {
                id: 2,
                title: "Language I",
                subject: "Reading",
                completed: false
            }
        ])
        setWednesday([
            {
                id: 3,
                title: "Biology I",
                subject: "Science",
                completed: false
            }
        ])
        setThursday([
            {
                id: 4,
                title: "Algebra I",
                subject: "Math",
                completed: false
            }
        ])
        setFriday([
            {
                id: 5,
                title: "Language I",
                subject: "Reading",
                completed: false
            }
        ])
    }

    // useEffect(() => {
    //     setMonday([
    //         {
    //             id: 1,
    //             title: "Language II",
    //             subject: "Reading",
    //             completed: false
    //         },
    //     ])

    //     setTuesday([
    //         {
    //             id: 2,
    //             title: "Algebra I",
    //             subject: "Math",
    //             completed: false
    //         },
    //         {
    //             id: 3,
    //             title: "Biology I",
    //             subject: "Science",
    //             completed: false
    //         },
            
    //     ])
    // }, []);

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return
        }

        if (source.droppableId === destination.droppableId) {
            reorderState(source.droppableId, source.index, destination.index)
        } else {
            deletePreviousState(source.droppableId, draggableId);
            const task = findItemById(draggableId, [...monday, ...tuesday, ...wednesday, ...thursday, ...friday]);
            setNewState(destination.droppableId, task, destination.index);
        }

    };

    function reorderState(sourceDroppableId, initialIndex, finalIndex) {
        var tmpState
        var tmpItem
        switch (sourceDroppableId) {
            case "1": 
                tmpState = [...monday]
                tmpItem = tmpState[initialIndex]
                setMonday(tmpState.toSpliced(initialIndex, 1).toSpliced(finalIndex, 0, tmpItem));
                break;
            case "2":
                tmpState = [...tuesday]
                tmpItem = tmpState[initialIndex]
                setTuesday(tmpState.toSpliced(initialIndex, 1).toSpliced(finalIndex, 0, tmpItem));
                break;
            case "3":
                tmpState = [...wednesday]
                tmpItem = tmpState[initialIndex]
                setWednesday(tmpState.toSpliced(initialIndex, 1).toSpliced(finalIndex, 0, tmpItem));

                break;
            case "4":
                tmpState = [...thursday]
                tmpItem = tmpState[initialIndex]
                setThursday(tmpState.toSpliced(initialIndex, 1).toSpliced(finalIndex, 0, tmpItem));
                break;
            case "5":
                tmpState = [...friday]
                tmpItem = tmpState[initialIndex]
                setFriday(tmpState.toSpliced(initialIndex, 1).toSpliced(finalIndex, 0, tmpItem));
                break;
        }
    }

    function deletePreviousState(sourceDroppableId, taskId) {
        switch (sourceDroppableId) {
            case "1":
                setMonday(removeItemById(taskId, monday));
                break;
            case "2":
                setTuesday(removeItemById(taskId, tuesday));
                break;
            case "3":
                setWednesday(removeItemById(taskId, wednesday));
                break;
            case "4":
                setThursday(removeItemById(taskId, thursday));
                break;
            case "5":
                setFriday(removeItemById(taskId, friday));
                break;
        }

    }
    function setNewState(destinationDroppableId, task, index) {
        switch (destinationDroppableId) {
            case "1":   
                setMonday(monday.toSpliced(index,0,task));
                break;
            case "2":  
                setTuesday(tuesday.toSpliced(index,0,task));
                break;
            case "3":  
                setWednesday(wednesday.toSpliced(index,0,task));
                break;
            case "4":  
                setThursday(thursday.toSpliced(index,0,task));
                break;
            case "5":  
                setFriday(friday.toSpliced(index,0,task));
                break;
        }
    }

    function findItemById(id, array) {
        return array.find((item) => item.id == id);
    }

    function removeItemById(id, array) {
        return array.filter((item) => item.id != id);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="schedule-controls">
                <h1 id="schedule-title">Schedule</h1>
                <button id="generate" onClick={generateSchedule}><h1>Generate</h1></button>
            </div>
            <hr/>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "95vw",
                    right: 0,
                    paddingLeft: "4vw",
                    margin: "0 auto"
                }}
            >
                <Column title={"MON"} tasks={monday} id={"1"} />
                <Column title={"TUE"} tasks={tuesday} id={"2"} />
                <Column title={"WED"} tasks={wednesday} id={"3"} />
                <Column title={"THUR"} tasks={thursday} id={"4"} />
                <Column title={"FRI"} tasks={friday} id={"5"} />
            </div>
            <hr/>
        </DragDropContext>
    );
}
