import React from "react";
import "./Login.css";
import { LoginForm } from "../../components";
import loginBg from "../../assets/Banners/login-banner.jpg";
export default function Login() {
  return (
    <div className="Login">
      <LoginForm />
      <div
        className="banner"
        style={{
          backgroundImage: `url("${loginBg}")`,
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <img src="/logoRaw.png" alt="logo" className="login-logo" />
        <p className="title">Welcome to eWorldTrade</p>
        <p className="desc">
          To achieve our mission we provide all the necessary functionalities to
          buyers and sellers that help them in developing the voice of their
          business and to expand worldwide.
        </p>
      </div>
    </div>
  );
}
