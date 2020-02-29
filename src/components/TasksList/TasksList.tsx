import React, { useCallback } from "react";
import { Box } from "../../tasky-ui";
import Column from "../../components/Column/Column";
import { TaskType } from "../../Types/Task";
import { ColType } from "../../Types/Col";

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
        <Box display="flex" mt={2}>
            {data.columnOrder.map(col => {
                const column = data.columns[col];
                const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
                return <Column key={column.id} tasks={tasks} column={column} />;
            })}
        </Box>
    );
}
