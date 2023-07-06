import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuList: [],
    menuListCategory: [],
}
const setMenuData = (state, action) => {
    state.menuList = action.payload
}
const setMenuCategoryData = (state, action) => {
    console.log(action.payload);
    if (action.payload === "all") {
        state.menuListCategory = state.menuList
        return
    }
    state.menuListCategory = state.menuList.filter((food) => {
        return food.category === action.payload;
    })
}
const MenuDataProject = createSlice({
    name: 'Menu',
    initialState,
    reducers: {
        setMenuData,
        setMenuCategoryData,
    }
})
export const {
    setMenuData: setMenuDataAction,
    setMenuCategoryData: setMenuCategoryDataAction,
} = MenuDataProject.actions

export default MenuDataProject.reducer