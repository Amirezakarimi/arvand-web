import React from "react";

export default function LoginForm() {
  const connectBtn = [
    {
      text: "Facebook",
      color: "#5867dd",
      icon: "fa-brands fa-facebook-f",
    },
    {
      text: "Linkedin",
      color: "#0076b4",
      icon: "fa-brands fa-linkedin-in",
    },
    {
      text: "Google",
      color: "#d44940",
      icon: "fa-brands fa-google",
    },
  ];
  return (
    <div className="LoginForm">
      <div className="LoginForm-container">
        <p className="title">Member Login</p>
        <div className="input-wrapper">
          <input type="email" id="email" placeholder="Email Address" />

          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className="btn-wrapper">
          <button>LOGIN</button>
          <a>Forgot your password?</a>
        </div>
        <div className="other-connect">
          <p className="title">
            <span>or connect with</span>
          </p>
          <div className="connect-btn-wrapper">
            {connectBtn.map((btn, i) => (
              <button style={{ backgroundColor: `${btn.color}` }}>
                <p>{btn.text}</p>
                <i className={btn.icon}></i>
              </button>
            ))}
          </div>
          <div className="register-wrapper">
            <a href="">New to eWorldTrade?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
