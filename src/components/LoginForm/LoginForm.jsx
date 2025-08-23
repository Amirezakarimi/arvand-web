import React from "react";

export default function LoginForm() {
  const connectBtn = [
    {
      text: "Facebook",
      color: "#5867dd",
      icon: "fa-brands fa-facebook-f",
    },
    // {
    //   text: "Linkedin",
    //   color: "#0076b4",
    //   icon: "fa-brands fa-linkedin-in",
    // },
    {
      text: "Google",
      color: "#d44940",
      icon: "fa-brands fa-google",
    },
  ];
  return (
    <div className="LoginForm">
      <div className="LoginForm-container">
        <p className="title">ورود به سامانه</p>
        <div className="input-wrapper">
          <input type="email" id="email" placeholder="ایمیل" />

          <input type="password" id="password" placeholder="رمز عبور" />
        </div>
        <div className="btn-wrapper">
          <button>ورود</button>
          <a>فراموشی رمز عبور؟</a>
        </div>
        <div className="other-connect">
          <p className="title">
            <span>یا از طریق</span>
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
            <a href="/register">ثبت نام نکرده اید؟</a>
          </div>
        </div>
      </div>
    </div>
  );
}
