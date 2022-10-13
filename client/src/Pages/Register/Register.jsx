import React, { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://user-images.githubusercontent.com/83646986/194785757-070f5be5-b86f-4806-9c9b-1e2f1f66f1ad.png"
            alt=""
          />
          <button className="loginButton">로그인</button>
        </div>
      </div>
      <div className="container">
        <h1>영화와 시리즈를 무제한으로.</h1>
        <h2>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
        <p>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="이메일 주소" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              시작하기
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
