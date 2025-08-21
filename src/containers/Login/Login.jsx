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
        <p className="title">آروند پلیمر</p>
        <p className="desc">
          ما تولیدکننده لوله، اتصالات و شیرآلات صنعتی و ساختمانی هستیم. مأموریت ما ارائه محصولات باکیفیت و مطابق استانداردهای روز، با تحویل سریع و قیمت رقابتی است. با تکیه بر تیم متخصص و شبکه فروش گسترده، پاسخ‌گوی نیاز پروژه‌های ساختمانی تا صنایع بزرگ هستیم.
        </p>
      </div>
    </div>
  );
}
