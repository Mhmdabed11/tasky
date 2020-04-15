import React, { useCallback, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TaskType } from '../Types/Task';
import { ColType } from '../Types/Col';
import TasksList from '../components/TasksList/TasksList';
import FullLoadingShimmer from '../components/FullLoadingShimmer/FullLoadingShimmer';
import { UserService as UserAPI } from '../services/UserService';
import { ColumnService as ColumnAPI } from '../services/ColumnService';
import { useLoadingDispatch } from '../lib/loadingContext';
import Modal from '../tasky-ui/Modal';

const UserService = UserAPI();
const ColumnService = ColumnAPI();

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
    tasks: {},
    columns: {},
    columnOrder: [],
};

export default function Main() {
    const [data, setData] = useState<InitialData>(initialData);
    const [initialFetching, setInitialFetching] = useState<boolean>(true);
    const [hide, setHide] = useState<boolean>(false);
    const [show, setShow] = useState(false);

    const dispatch = useLoadingDispatch();
    useEffect(() => {
        dispatch({ type: 'TOGGLE_LOADING' });
        UserService.getTasksHierarchy()
            .then(data => setData(data))
            .catch(err => console.log(err))
            .then(() => dispatch({ type: 'TOGGLE_LOADING' }))
            .then(() => setHide(true));
    }, [dispatch]);

    // handle on Drag end
    const onDragEnd = useCallback(
        (result: DropResult) => {
            const { destination, source, draggableId, type } = result;

            if (!destination) {
                return;
            }
            if (source.droppableId === destination.droppableId && source.index === destination.index) {
                return;
            }

            if (type === 'column') {
                const originalColumnsOrder = data.columnOrder;
                const newColumnsOrder = Array.from(data.columnOrder);
                newColumnsOrder.splice(source.index, 1);
                newColumnsOrder.splice(destination.index, 0, draggableId);
                dispatch({ type: 'TOGGLE_LOADING' });
                UserService.updateUser({ columnsOrder: newColumnsOrder })
                    .catch(err =>
                        setData(curr => ({
                            ...curr,
                            columnOrder: originalColumnsOrder,
                        })),
                    )
                    .then(() => dispatch({ type: 'TOGGLE_LOADING' }));

                const newState = {
                    ...data,
                    columnOrder: newColumnsOrder,
                };
                setData(newState);
                return;
            }

            const sourceColumn = data.columns[source.droppableId];
            const destinationColumn = data.columns[destination.droppableId];

            if (sourceColumn.id === destinationColumn.id) {
                const newColumnTasksIds = Array.from(data.columns[sourceColumn.id].taskIds);
                newColumnTasksIds.splice(source.index, 1);
                newColumnTasksIds.splice(destination.index, 0, draggableId);
                dispatch({ type: 'TOGGLE_LOADING' });
                ColumnService.updateColumn(sourceColumn.id, {
                    tasks: newColumnTasksIds,
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                    .then(() => dispatch({ type: 'TOGGLE_LOADING' }));

                const newState = {
                    ...data,
                    columns: {
                        ...data.columns,
                        [sourceColumn.id]: {
                            ...data.columns[sourceColumn.id],
                            taskIds: newColumnTasksIds,
                        },
                    },
                };

                setData(newState);
                return;
            }

            const sourceTaskIds = Array.from(data.columns[source.droppableId].taskIds);
            const destinationTaskIds = Array.from(data.columns[destination.droppableId].taskIds);
            sourceTaskIds.splice(source.index, 1);
            destinationTaskIds.splice(destination.index, 0, draggableId);
            (async function update() {
                dispatch({ type: 'TOGGLE_LOADING' });
                try {
                    await ColumnService.updateColumn(sourceColumn.id, {
                        tasks: sourceTaskIds,
                    });
                    await ColumnService.updateColumn(destinationColumn.id, {
                        tasks: destinationTaskIds,
                    });
                    dispatch({ type: 'TOGGLE_LOADING' });
                } catch (err) {
                    dispatch({ type: 'TOGGLE_LOADING' });
                }
            })();

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [source.droppableId]: {
                        ...data.columns[source.droppableId],
                        taskIds: sourceTaskIds,
                    },
                    [destination.droppableId]: {
                        ...data.columns[destination.droppableId],
                        taskIds: destinationTaskIds,
                    },
                },
            };

            setData(newState);
        },
        [data, dispatch],
    );

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <TasksList data={data} />
            {initialFetching ? (
                <FullLoadingShimmer hide={hide} onAnimationEnd={() => setInitialFetching(false)} />
            ) : null}
            <button
                onClick={() => {
                    setShow(curr => !curr);
                    setTimeout(() => {
                        setShow(false);
                    }, 3000);
                }}
            >
                Show
            </button>
            <Modal visible={show}>
                <div>Hello</div>
            </Modal>
        </DragDropContext>
    );
}
