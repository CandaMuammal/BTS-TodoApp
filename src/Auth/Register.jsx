import React from 'react'
import style from './Auth.module.css'
import {useState, useEffect} from 'react'

const Register= () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    // useEffect(() => {
    //   if (localStorage.getItem('user-info'))
    // }, [])
    
    

   async function RegisterMember(){
        let item = {username, password, email}
        const params = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        };
        let result = await fetch('https://94.74.86.174:8080/api/register', params)
        
        localStorage.setItem("user-info", JSON.stringify(result))
    }
    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <h5>Please Register with your account</h5>
                
                <div className={style['form-control']}>
                    <input type="text" placeholder="  Username " onChange={(e)=> setUsername (e.target.value)} />
                    <input type="text" placeholder="  Email" onChange={(e)=> setEmail(e.target.value)} />
                    <input type="text" placeholder="  Password" onChange={(e)=> setPassword(e.target.value)} />
                   
                </div>

               
                <button onClick={RegisterMember}>Register</button>
            </div>

        </div>

    )
}

export default Register