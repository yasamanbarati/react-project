import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectList: [],
}

const setProjectData = (state, action) => {
    state.projectList = action.payload
}

const ProjectData = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjectData,
    }
})
export const {
    setProjectData: setProjectDataAction,
} = ProjectData.actions

export default ProjectData.reducer