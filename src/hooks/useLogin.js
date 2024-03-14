import { useState} from 'react'
import {useAuthContext} from './useAuthContext'


export const useLogin = () => {
    const[error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()




    const login = async (username,password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/project/user/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username,password})
        })
        const json = await response.json()
       

        if(!response.ok)
        {
            setIsLoading(false)
            setError(json.error)
            localStorage.clear();
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
            console.log("this is the json",json);
            window.location.href='/home'
            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)
            
            
   
             }
     
        
    }
  

    return {login, isLoading,error}
}
