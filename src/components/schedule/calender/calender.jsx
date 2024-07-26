import React, { useLayoutEffect, useEffect, useState } from "react"
import { DragDropContext } from "react-beautiful-dnd";
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from "gsap/all"
import Column from "../column/column";


export default function Calender() {
    const [monday, setMonday] = useState([]);
    const [tuesday, setTuesday] = useState([]);
    const [wednesday, setWednesday] = useState([]);
    const [thursday, setThursday] = useState([]);
    const [friday, setFriday] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setTuesday(json.filter((task) => task.completed));
                setMonday(json.filter((task) => !task.completed));
            });
    }, []);

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return
        }

        if (source.droppableId === destination.droppableId) {
            reorderState(source.droppableId, source.index, destination.index)
        } else {
            deletePreviousState(source.droppableId, draggableId);
            const task = findItemById(draggableId, [...monday, ...tuesday, ...wednesday, ...thursday]);
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
                case "4":
                setFriday(removeItemById(taskId, friday));
                break;
        }

    }
    function setNewState(destinationDroppableId, task, index) {
        let updatedTask;
        switch (destinationDroppableId) {
            case "1":   // TO DO
                updatedTask = { ...task, completed: false };
                setMonday(monday.toSpliced(index,0,updatedTask));
                break;
            case "2":  // DONE
                updatedTask = { ...task, completed: true };
                setTuesday(tuesday.toSpliced(index,0,updatedTask));
                break;
            case "3":  // IN REVIEW
                updatedTask = { ...task, completed: false };
                setWednesday(wednesday.toSpliced(index,0,updatedTask));
                break;
            case "4":  // BACKLOG
                updatedTask = { ...task, completed: false };
                setThursday(thursday.toSpliced(index,0,updatedTask));
                break;
            case "5":  // BACKLOG
                updatedTask = { ...task, completed: false };
                setFriday(friday.toSpliced(index,0,updatedTask));
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
            <h2 style={{ textAlign: "center" }}>Schedule</h2>

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
        </DragDropContext>
    );
}
