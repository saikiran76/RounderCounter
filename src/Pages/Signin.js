import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import { Bar } from "../components/Bar";
import Home from "./Home";
import { auth, provider } from "../utils/FireBase";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";

const Signin = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [value, setValue] = useState('')

    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    }, [])

    return (value ? <Home/> :
    <div className="bg-[#0F172A] shadow-[#F472B6] shadow-lg h-screen flex justify-center font-inter">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-[#F472B6] shadow-lg">
        <h1 className="font-extrabold text-3xl m-2">Counter</h1>
        <h2 className="m-3 text-sm">Welcome Back</h2>
        <Bar text="Sign up with Google" handler={handleClick} margin="mb-2" content={<img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png" className="w-[2rem] rounded-2xl" alt="g"/>}/>
        <InputBox value={username} type="email" name="email" onChange={e => {
          setUsername(e.target.value);
        }} placeholder="kiran@gmail.com" label={"Email"} />
        <InputBox value={password} type="password" name="password" onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button name="Signup" />
        </div>
        <BottomWarning label={"Do not have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div> 
  )
}

export default Signin