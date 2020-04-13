import { request } from '../lib/request';

export const ColumnService = () => {
    return {
        updateColumn: (columnId: string, body: object) =>
            request({ url: `column/${columnId}`, method: 'put', data: body }),
    };
};
