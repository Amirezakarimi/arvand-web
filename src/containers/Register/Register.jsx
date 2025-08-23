import React from "react";
import "./Register.css";
import { RegisterForm } from "../../components";
import registerBg from "../../assets/Banners/login-banner.jpg";

export default function Register() {
  return (
    <div className="Register">
      <RegisterForm />
      <div
        className="banner"
        style={{
          backgroundImage: `url("${registerBg}")`,
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <img src="/logoRaw.png" alt="logo" className="register-logo" />
        <p className="title">آروند پلیمر</p>
        <p className="desc">
          به خانواده بزرگ آروند پلیمر بپیوندید و از مزایای عضویت در سامانه بهره‌مند شوید. 
          دسترسی به محصولات باکیفیت، قیمت‌های رقابتی و خدمات پس از فروش حرفه‌ای.
        </p>
      </div>
    </div>
  );
}
