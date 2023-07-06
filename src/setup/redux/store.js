import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../../scenes/_slice/home.slice'
import reminderReducer from '../../scenes/_slice/reminder.slice'
import toursReducer from '../../scenes/_slice/tours.slice'
import reviewsReducer from '../../scenes/_slice/reviews.slice'
import menuReducer from '../../scenes/_slice/menu.slice'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        reminder: reminderReducer,
        tours: toursReducer,
        reviews: reviewsReducer,
        menu: menuReducer,
    },
})


export const { dispatch, getState } = store