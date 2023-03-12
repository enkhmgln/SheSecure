import React,{useState} from "react";
import {Route, Routes} from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'
import Login from './pages/Login'
import CreatePost from "./pages/CreatePost";
import HomePosts from "./pages/HomePosts";
import Navbar from "./components/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); 
  const handleSignOut = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  };
   const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <>
    <>
    <Navbar isAuth={isAuth} handleSignOut={handleSignOut} />
      </>
        <Routes> 
      <Route index element={<Home />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/posts" element={<HomePosts isAuth={isAuth} />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
      <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
  </Routes>
  </>

  );
}

export default App;
