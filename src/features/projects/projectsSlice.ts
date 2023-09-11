import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { fetchProjects, Project, Category, fetchProjectCategories } from "./projectsAPI"

export interface projectsState {
  projects: Array<Project>,
  categories: Array<Category>
}

const initialState: projectsState = {
  projects: [],
  categories: []
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
  }
})

export const { setProjects, setCategories } = projectsSlice.actions

export const selectProjects = (state: RootState) => state.projects.projects
export const selectCategories = (state: RootState) => state.projects.categories

export const getProjects =
  (): AppThunk =>
  async (dispatch, getState) => {
    fetchProjects().then(resp => {
      dispatch(setProjects(resp.items))
    })
    fetchProjectCategories().then(resp => {
      dispatch(setCategories(resp.items))
    })
  }

export default projectsSlice.reducer
