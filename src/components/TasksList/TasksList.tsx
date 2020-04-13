import React, { useCallback } from 'react';
import { Box } from '../../tasky-ui';
import Column from '../../components/Column/Column';
import { TaskType } from '../../Types/Task';
import { ColType } from '../../Types/Col';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';

type Columns = {
    [key: string]: ColType;
};

type Tasks = {
    [key: string]: TaskType;
};

type TasksData = {
    tasks: Tasks;
    columns: Columns;
    columnOrder: Array<string>;
};

type Data = {
    data: TasksData;
};

export default function TasksList({ data }: Data) {
    return (
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided: DroppableProvided) => {
                return (
                    <Box mt={2} {...provided} ref={provided.innerRef}>
                        {data.columnOrder.map((col, index) => {
                            const column = data.columns[col];
                            const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
                            return <Column key={column.id} tasks={tasks} column={column} index={index} />;
                        })}
                        {provided.placeholder}
                    </Box>
                );
            }}
        </Droppable>
    );
}
