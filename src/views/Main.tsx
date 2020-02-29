import React, { useCallback } from "react";
import { Box } from "../tasky-ui";
import Column from "../components/Column/Column";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { TaskType } from "../Types/Task";
import { ColType } from "../Types/Col";
import TasksList from "../components/TasksList/TasksList";

type Columns = {
    [key: string]: ColType;
};

type Tasks = {
    [key: string]: TaskType;
};

type InitialData = {
    tasks: Tasks;
    columns: Columns;
    columnOrder: Array<string>;
};

const initialData: InitialData = {
    tasks: {
        "task-1": { id: "task-1", content: "Take out garbage" },
        "task-2": { id: "task-2", content: "Watch my favorite show" },
        "task-3": { id: "task-3", content: "Charge my phone" },
        "task-4": { id: "task-4", content: "Cook dinner" }
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds: ["task-1", "task-2", "task-3", "task-4"]
        },
        "column-2": {
            id: "column-2",
            title: "To do",
            taskIds: []
        },
        "column-3": {
            id: "column-3",
            title: "To do",
            taskIds: []
        }
    },
    columnOrder: ["column-1", "column-2", "column-3"]
};

export default function Main() {
    const [data, setData] = React.useState<InitialData>(initialData);

    // handle on Drag end
    const onDragEnd = useCallback(
        (result: DropResult) => {
            const { destination, source, draggableId } = result;

            if (!destination) {
                return;
            }
            if (
                source.droppableId === destination.droppableId &&
                source.index === destination.index
            ) {
                return;
            }

            const sourceColumn = data.columns[source.droppableId];
            const destinationColumn = data.columns[destination.droppableId];

            if (sourceColumn.id === destinationColumn.id) {
                let newColumnTasksIds = Array.from(
                    data.columns[sourceColumn.id].taskIds
                );
                newColumnTasksIds.splice(source.index, 1);
                newColumnTasksIds.splice(destination.index, 0, draggableId);

                const newState = {
                    ...data,
                    columns: {
                        ...data.columns,
                        [sourceColumn.id]: {
                            ...data.columns[sourceColumn.id],
                            taskIds: newColumnTasksIds
                        }
                    }
                };

                setData(newState);
                return;
            }

            const sourceTaskIds = Array.from(
                data.columns[source.droppableId].taskIds
            );
            const destinationTaskIds = Array.from(
                data.columns[destination.droppableId].taskIds
            );
            sourceTaskIds.splice(source.index, 1);
            destinationTaskIds.splice(destination.index, 0, draggableId);

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [source.droppableId]: {
                        ...data.columns[source.droppableId],
                        taskIds: sourceTaskIds
                    },
                    [destination.droppableId]: {
                        ...data.columns[destination.droppableId],
                        taskIds: destinationTaskIds
                    }
                }
            };

            setData(newState);
        },
        [data]
    );

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <TasksList data={data} />
        </DragDropContext>
    );
}
