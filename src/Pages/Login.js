import InputBox from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import { Bar } from "../components/Bar";
import Home from "./Home";
import { auth, provider } from "../utils/FireBase";
import { signInWithPopup } from "firebase/auth";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect,  useRef } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [value, setValue] = useState('');
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);

  const handleButtonClick = () => {
    if (email.current && pass.current) {
      const message = checkValidData(email.current.value, pass.current.value);
      setErrorMessage(message);
      if (message) return;

      if (!login) {
        // Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                  })
                );
                navigate('/Home');
              })
              .catch((error) => setErrorMessage(error.message));
          })
          .catch((error) => setErrorMessage(`${error.code} - ${error.message}`));
      } else {
        signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
          .then((userCredential) => {
            const { uid, email, displayName } = userCredential.user;
            dispatch(
              addUser({
                uid: uid,
                email,
                displayName,
              })
            );
            navigate('/Home');
          })
          .catch((error) => setErrorMessage(`${error.code} - ${error.message}`));
      }
    } else {
      setErrorMessage("Refs not correctly assigned.");
    }
  };

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const handleLogin = (loginState) => {
    loginState === "Sign in" ? setLogin(true) : setLogin(false);
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (value ? <Home /> :
    <div className="bg-[#0F172A] shadow-[#F472B6] shadow-lg h-screen flex justify-center font-inter">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 p-2 h-max px-4 shadow-[#F472B6] shadow-lg">
          <h1 className="font-extrabold text-3xl m-2 text-center">Counter</h1>
          <h2 className="m-3 text-sm text-center">{!login ? "Create an account" : 'Welcome Back'}</h2>
          <Bar text={!login ? "Sign up with Google" : "Sign in"} handler={handleClick} margin="mb-2" content={<img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png" className="w-[2rem] rounded-2xl" alt="g" />} />

          {!login && <label className="block mb-1 ml-1 text-xs font-medium text-gray-900 dark:text-gray-800">Name</label>}
          {!login && <InputBox ref={name} type="text" name="name" placeholder="Kiran" value={username} onChange={e => setUsername(e.target.value)} />}

          <label className="block mb-1 ml-1 text-xs font-medium text-gray-900 dark:text-gray-800">Email</label>
          <InputBox ref={email} type="email" name="email" placeholder="kiran@gmail.com" value={mail} onChange={e => setMail(e.target.value)} />

          <label className="block mb-1 ml-1 text-xs font-medium text-gray-900 dark:text-gray-800">Password</label>
          <InputBox ref={pass} type="password" name="password" placeholder="123456" value={password} onChange={e => setPassword(e.target.value)} />

          <Button name={!login ? "Signup" : "Signin"} width="w-full" handler={handleButtonClick} />
          <BottomWarning label={!login ? "Already have an account?" : "Don't have an account?"} buttonText={!login ? "Sign in" : "Register"} to={"/signin"} handler={() => handleLogin(!login ? "Sign in" : "Register")} />
        </div>
      </div>
    </div>
  );
}

export default Login;