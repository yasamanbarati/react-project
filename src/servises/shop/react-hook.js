import { useEffect } from 'react'
import { fetchData } from './api'

export const useToursData = () => {
    useEffect(() => { fetchData() }, [])
}