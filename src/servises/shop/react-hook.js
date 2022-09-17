import { useEffect } from "react"
import axios from "axios";
import { useDispatch } from 'react-redux'
import { setProjectDataAction } from '../../scenes/_slice/shop.slice';

export const useInitialStateData = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:3000/projectCard').then(response => {
                dispatch(setProjectDataAction(response.data))
            }).catch(error => {
                console.error(error);
            })
        }, 1500);
    }, [])
}