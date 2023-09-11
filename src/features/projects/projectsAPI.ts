import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://backend.cyberia.studio/api/v1'
});

export const fetchProjects = async () => {
    const resp = await axiosInstance.get('/projects');
    return resp.data
}

export const fetchProjectCategories = async () => {
    const resp = await axiosInstance.get('/project-categories');
    return resp.data
}

export const postFeedback = async () => {
    const resp = await axiosInstance.post('/feedbacks');
    return resp.data
}

export interface Project {
    "id": 2,
    "title": "Project name",
    "slug": "project-name",
    "image": "https://backend.cyberia.studio/storage/febb.png",
    "image_dark": "https://backend.cyberia.studio/storage/febb_dark.png",
    "description": "lorem ipsum",
    "geo": {
        "lat": 43.1234,
        "lng": 12.2313
    },
    "categories": [
        {
            "id": 1,
            "name": "Project name"
        }
    ]
}

export interface Category {
    "id": 1,
    "name": "Project name"
}