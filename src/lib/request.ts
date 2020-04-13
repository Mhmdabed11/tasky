import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:4001/api/';

const apiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjRlZjQwNzBlOWMxNGVkMDMwNDQyMSIsImlhdCI6MTU4MzY3MzE1MiwiZXhwIjoxNTkyMzEzMTUyfQ.hFcV_eyawkth2O6eH4ydglQIN8R9VfTVzClIxdMv-nc',
    },
});

export const request = (config: object) => {
    // return api response data
    const onRequestSuccess = (response: AxiosResponse) => response.data;

    return apiClient(config).then(onRequestSuccess);
};
