import React,{useState} from 'react'
import Main from '../Main'
import LoginForm from './Login'



export default function LoginDetail() {
    const adminUser={
        email:"ann1391@gmail.com",
        password:"ann123"

    }
     
    const[user, setUser]=useState({name:"",email:""});
    const[error,setError]=useState("")
   


    const Logins=details=>{
        console.log(details)
        if(details.email===adminUser.email && details.password===adminUser.password){
            console.log("Logged in")
    
            setUser({
                name:details.name,
                email:details.email
            })
        }
        else{
            console.log("Detail dont match")
        }
    }

    const Logout=()=>{
        console.log("Logout")
    }

    return (
        <div>(
            {(user.email!=="")?(<Main/>):(<LoginForm Logins={Logins} error={error}/>)}
             
        </div>
    )
}
 


