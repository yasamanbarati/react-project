import { createSlice } from "@reduxjs/toolkit";

const initialState = { personList: [], }

const setPersonData = (state, action) => {
    state.personList = action.payload
}
const ClearPersonList = (state) => {
    state.personList = [];
}
const BirthdayReminderData = createSlice({
    name: 'BirthdayReminder',
    initialState,
    reducers: {
        setPersonData,
        ClearPersonList,
    }
})
export const {
    setPersonData: setPersonDataAction,
    ClearPersonList: ClearPersonListAction,
} = BirthdayReminderData.actions

export default BirthdayReminderData.reducer