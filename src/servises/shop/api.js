import { useEffect } from "react"
import axios from "axios";
import { setProjectDataAction, setPersonDataAction, setToursDataAction, hasErrorAction, startLoadingAction, setReviewsDataAction, setMenuDataAction } from '../../scenes/_slice/shop.slice';
import { dispatch } from "../../setup/redux/store";
export const useInitialStateData = () => {

    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:3000/projectCard').then(response => {
                dispatch(setProjectDataAction(response.data))
            }).catch(error => {
                console.error(error);
            })
            axios.get('http://localhost:3000/personList').then(response => {
                dispatch(setPersonDataAction(response.data))
            }).catch(error => {
                console.error(error);
            })
            axios.get('http://localhost:3000/reviews').then(response => {
                dispatch(setReviewsDataAction(response.data))
            }).catch(error => {
                console.error(error);
            })
            axios.get('http://localhost:3000/menu').then(response => {
                dispatch(setMenuDataAction(response.data))
            }).catch(error => {
                console.error(error);
            })

        }, 1500);
    }, [])
}
export const fetchData = () => {
    dispatch(startLoadingAction())
    setTimeout(() => {
        axios.get('https://course-api.com/react-tours-project')
            .then(response => {
                dispatch(setToursDataAction(response.data))
            }).catch(e =>
                dispatch(hasErrorAction(e.message)))
    }, 2000);
}