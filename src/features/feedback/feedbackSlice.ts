import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"

export interface projectsState {
  
}

const initialState: projectsState = {
  
}

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    
  }
})

//export const { setProjects, setCategories, setStatus } = projectsSlice.actions

export const selectProjects = (state: RootState) => state.projects.projects
export const selectCategories = (state: RootState) => state.projects.categories

export const initProjects =
  (): AppThunk =>
  async (dispatch, getState) => {
    
  }

export default projectsSlice.reducer
