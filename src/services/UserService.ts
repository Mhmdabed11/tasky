import { request } from "../lib/request";

export const UserService = () => {
    return {
        getTasksHierarchy: () => request({ url: "user/hierarchy" }),
        updateUser: (body: any) =>
            request({ url: "user/", method: "put", data: body })
    };
};
