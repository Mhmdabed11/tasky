import React, { ReactNode, ReactNodeArray } from "react";
import { Box } from "../../tasky-ui";
import {
    Droppable,
    DroppableProvided,
    DroppableStateSnapshot
} from "react-beautiful-dnd";
import Task from "../Task/Task";
import { TaskType } from "../../Types/Task";
import { ColType } from "../../Types/Col";

type Props = {
    tasks: Array<TaskType>;
    column: ColType;
};

export default function Column({ tasks, column }: Props) {
    return (
        <Box bg="columnBackground" width={250} mx={2}>
            <Box px={2} py={3} color="text" fontsize={3} fontWeight={5}>
                {column.title}
            </Box>
            <Droppable droppableId={column.id}>
                {(
                    provided: DroppableProvided,
                    snapshot: DroppableStateSnapshot
                ) => {
                    return (
                        <Box
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            bg={snapshot.isDraggingOver && "draggingBackground"}
                            minHeight={50}
                            p={2}
                        >
                            {tasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index} />
                            ))}
                            {provided.placeholder}
                        </Box>
                    );
                }}
            </Droppable>
        </Box>
    );
}
