import React from 'react'
import style from './Auth.module.css'
import {useState, useEffect} from 'react'

const Login= () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // useEffect(() => {
    //   if (localStorage.getItem('user-info'))
    // }, [])
    
    async function loginMember() {
        let item = {username, password}
        let result = await fetch('http://94.74.86.174:8080/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application.json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
    }
    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <h5>Please login with your account</h5>
                
                <div className={style['form-control']}>
                    <input type="text" placeholder="  Username " onChange={(e)=> setUsername (e.target.value)} />
                    <input type="text" placeholder="  Password" onChange={(e)=> setPassword(e.target.value)} />
                   
                </div>

               
                <button onClick={loginMember}>Login</button>
            </div>

        </div>

    )
}

export default Login