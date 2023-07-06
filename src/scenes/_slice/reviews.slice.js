import { createSlice } from "@reduxjs/toolkit";

const initialState = { reviewsList: [], }


const setReviewsData = (state, action) => {
    state.reviewsList = action.payload
}
const ReviewsDataProject = createSlice({
    name: 'Reviews',
    initialState,
    reducers: {
        setReviewsData,
    }
})
export const {
    setReviewsData: setReviewsDataAction,
} = ReviewsDataProject.actions

export default ReviewsDataProject.reducer