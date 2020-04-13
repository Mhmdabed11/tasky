import React from 'react';
import { Box } from '../../tasky-ui';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { TaskIcon, Container } from './Task.style';
import { TaskType as Task } from '../../Types/Task';

type Props = {
    task: Task;
    index: number;
};

function Task({ task, index }: Props) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
                return (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        bg={snapshot.isDragging ? 'rowDraggingBackground' : 'rowBackground'}
                        p={2}
                        mb={2}
                        rotate={snapshot.isDragging.toString()}
                        dndTransform={provided.draggableProps.style.transform}
                    >
                        <Box display="flex">
                            <Box mr={2}>
                                <TaskIcon
                                    src="https://images.unsplash.com/photo-1563387852576-964bc31b73af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1382&q=80"
                                    alt={task.content}
                                />
                            </Box>
                            <Box fontSize={1} color={snapshot.isDragging ? 'rowDraggingColor' : 'text'}>
                                <Box fontWeight={5}>{task.content}</Box>
                                <Box fontSize={0}> {task.description}</Box>
                            </Box>
                        </Box>
                    </Container>
                );
            }}
        </Draggable>
    );
}

export default React.memo(Task);
