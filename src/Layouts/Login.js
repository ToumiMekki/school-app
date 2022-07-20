import axios, * as others from 'axios';
import { useState,useEffect} from 'react';

function Login() {

const [adminInfo,setAdminInfo]=useState([])
const [Email_input,setEmail]=useState('')
const [Err,setErr]=useState('')
const [Password_input,setPassword]=useState('')


useEffect(()=>{
    axios.get('http://localhost:9000/Login').then((response)=>{
        setAdminInfo(response.data)
        
    })
})



    const valudation =()=>{
        {adminInfo.map((val)=>{
            const email = val.email
            const password = val.password
            const Mac = val.Mac_address

            if((Email_input === email)&&(Password_input === password)&&(Mac == "00:15:5d:57:69:15")) {
                    window.location.href = 'http://localhost:3000/dash'
            }
            if(Email_input != email) {
                setErr('incorrect email please add the correct email')
            }
            if(Password_input != password) {
                setErr('incorrect password please add the correct password')
            }
            if(Mac != "00:15:5d:57:69:15") {
                setErr('Please Contact the buyer for buy a copy of this Program 0699977753')
            }

        })}

    }

    return (
        <div className='login'>
            <form action="">
                        <h1>Login</h1><br />
                        <h4>See Your Growth and Get Consulting Support !!</h4><br /><br />
                        <label htmlFor="" className='Email_login'>Email*</label>
                        <input type="email" name="email" id="email" placeholder='email'
                            onChange={(e)=>{
                                console.log(e.target.value) 
                                setEmail(e.target.value)
                            }}/><br /><br />
                            
                        <label htmlFor="" className='Pass_login'>Password*</label>                       
                        <input type="password" name="password" id="password" placeholder='password'                    
                                onChange={(e)=>{
                                console.log(e.target.value) 
                                setPassword(e.target.value)
                            }}/><br />
                        <input type="submit" value="Login" onClick={valudation}/><br />
                        <h2 className='Err'>{Err}</h2>
            </form>
        </div>
    )
}

export default Login
