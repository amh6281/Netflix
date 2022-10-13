import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://user-images.githubusercontent.com/83646986/194785757-070f5be5-b86f-4806-9c9b-1e2f1f66f1ad.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>로그인</h1>
          <input type="email" placeholder="이메일 주소 또는 전화번호" />
          <input type="password" placeholder="비밀번호" />
          <button className="loginButton">로그인</button>
          <span>
            Netflix 회원이 아닌가요? <b>지금 가입하세요.</b>
          </span>
          <small>
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다.
            <br /> <b style={{ color: "blue" }}>자세히 알아보기.</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
