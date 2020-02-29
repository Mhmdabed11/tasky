import React from "react";
import { Box } from "../../tasky-ui";
import {
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot
} from "react-beautiful-dnd";
import { TaskIcon } from "./Task.style";

type Task = {
    id: string;
    content: string;
};
type Props = {
    task: Task;
    index: number;
};

export default function Task({ task, index }: Props) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(
                provided: DraggableProvided,
                snapshot: DraggableStateSnapshot
            ) => {
                return (
                    <Box
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        bg={
                            snapshot.isDragging ? "lightgreen" : "rowBackground"
                        }
                        border={snapshot.isDragging && "1px solid"}
                        p={2}
                        mb={2}
                    >
                        <Box display="flex">
                            <Box mr={2}>
                                <TaskIcon
                                    src="https://images.unsplash.com/photo-1563387852576-964bc31b73af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1382&q=80"
                                    alt={task.content}
                                />
                            </Box>
                            <Box fontSize={1} color="text">
                                "Sometimes Life is scary and dark"
                            </Box>
                        </Box>
                    </Box>
                );
            }}
        </Draggable>
    );
}
