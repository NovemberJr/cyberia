import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { fetchProjects, Project, Category, fetchProjectCategories } from "./projectsAPI"

export interface projectsState {
  projects: Array<Project>,
  categories: Array<Category>,
  status: "loading" | "success"
}

const initialState: projectsState = {
  projects: [],
  categories: [],
  status: "loading"
}

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Array<Project>>) => {
      state.projects = action.payload
    },
    setCategories: (state, action: PayloadAction<Array<Category>>) => {
      state.categories = action.payload
    },
    setStatus: (state) => {
      state.status = "success"
    }
  }
})

export const { setProjects, setCategories, setStatus } = projectsSlice.actions

export const selectProjects = (state: RootState) => state.projects.projects
export const selectCategories = (state: RootState) => state.projects.categories

export const initProjects =
  (): AppThunk =>
  async (dispatch, getState) => {
    Promise.all([fetchProjects(), fetchProjectCategories()]).then(([ projects, categories ]) => {      
      dispatch(setProjects(projects))
      dispatch(setCategories(categories))
      dispatch(setStatus())
    })
  }

export default projectsSlice.reducer
