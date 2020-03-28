import React, { ReactNode, ReactNodeArray } from "react";
import { Box } from "../../tasky-ui";
import {
    Droppable,
    DroppableProvided,
    DroppableStateSnapshot,
    Draggable,
    DraggableProvided
} from "react-beautiful-dnd";
import Task from "../Task/Task";
import { TaskType } from "../../Types/Task";
import { ColType } from "../../Types/Col";
import { AddNewCard } from "./Column.style";

type Props = {
    tasks: Array<TaskType>;
    column: ColType;
    index: number;
};

function Column({ tasks, column, index }: Props) {
    return (
        <Draggable draggableId={column.id} index={index}>
            {(provided: DraggableProvided) => {
                return (
                    <Box
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        bg="columnBackground"
                        width={250}
                        py={2}
                        mx={1}
                        display="inline-block"
                        style={{
                            verticalAlign: "top",
                            ...provided.draggableProps.style
                        }}
                    >
                        <Box
                            px={2}
                            py={1}
                            color="text"
                            fontSize={1}
                            fontWeight={5}
                            {...provided.dragHandleProps}
                        >
                            {column.title}
                        </Box>
                        <Droppable droppableId={column.id} type="task">
                            {(
                                provided: DroppableProvided,
                                snapshot: DroppableStateSnapshot
                            ) => {
                                return (
                                    <Box
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        bg={
                                            snapshot.isDraggingOver &&
                                            "draggingBackground"
                                        }
                                        minHeight={50}
                                        p={2}
                                    >
                                        {tasks.map((task, index) => (
                                            <Task
                                                key={task.id}
                                                task={task}
                                                index={index}
                                            />
                                        ))}
                                        {provided.placeholder}
                                    </Box>
                                );
                            }}
                        </Droppable>
                        <AddNewCard
                            fontSize={1}
                            m={2}
                            p={2}
                            display="flex"
                            justifyContent="center"
                            color="text"
                        >
                            + Add another card
                        </AddNewCard>
                    </Box>
                );
            }}
        </Draggable>
    );
}

export default React.memo(Column);
