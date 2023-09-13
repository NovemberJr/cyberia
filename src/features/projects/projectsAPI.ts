import { axiosInstance } from "../../app/api"

export const fetchProjects = async (): Promise<Project[]> => {
    const resp = await axiosInstance.get('/projects')
    return resp.data.items
}

export const fetchProjectCategories = async (): Promise<Category[]> => {
    const resp = await axiosInstance.get('/project-categories')
    return resp.data.items
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
