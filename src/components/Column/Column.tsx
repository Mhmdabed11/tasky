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
                        mx={1}
                    >
                        <Box
                            px={2}
                            py={3}
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
                    </Box>
                );
            }}
        </Draggable>
    );
}

export default React.memo(Column);
