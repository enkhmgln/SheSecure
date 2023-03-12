import React from "react";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './LoginCompStyle.css'

function LoginComp({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true); // set isAuth to true
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="loginPage">
      <div className="createPostPage">
        <div className="lgContainer">
          <h3 className="warning">
            Нийтлэл оруулах эсвэл Нийтлэл унших бол заавал нэвтрэх хэрэгтэйг
            анхаарна уу!
          </h3>
          <p>
            Хэрэглэгчийн утасны дугаар, И-мэйл гэх мэт хувийн мэдээллийг
            цуглуулахгүй байхын тулд зөвхөн Gmail хаягаараа Нэвтрэх/Бүртгүүлнэ
          </p>

          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Энд дарж нэвтэрнэ үү.
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
