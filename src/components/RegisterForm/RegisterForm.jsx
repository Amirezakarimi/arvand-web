import React, { useState } from "react";
import "./RegisterForm.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    company: "",
    acceptTerms: false
  });

  const connectBtn = [
    {
      text: "Facebook",
      color: "#5867dd",
      icon: "fa-brands fa-facebook-f",
    },
    {
      text: "Google",
      color: "#d44940",
      icon: "fa-brands fa-google",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
  };

  return (
    <div className="RegisterForm">
      <div className="RegisterForm-container">
        <p className="title">ثبت نام در سامانه</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input 
              type="text" 
              id="firstName" 
              placeholder="نام" 
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
            />
            
            <input 
              type="text" 
              id="lastName" 
              placeholder="نام خانوادگی" 
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
            />
          </div>

          <div className="input-wrapper">
            <input 
              type="tel" 
              id="phone" 
              placeholder="شماره تماس" 
              value={formData.phone}
              style={{ textAlign: "right" }}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                handleInputChange("phone", value);
              }}
              onKeyPress={(e) => {
                const char = String.fromCharCode(e.which);
                if (!/[0-9]/.test(char)) {
                  e.preventDefault();
                }
              }}
              required
            />
          </div>

          <div className="input-wrapper">
            <input 
              type="password" 
              id="password" 
              placeholder="رمز عبور" 
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              required
            />
            
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="تکرار رمز عبور" 
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              required
            />
          </div>

          <div className="terms-wrapper">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={formData.acceptTerms}
                onChange={(e) => handleInputChange("acceptTerms", e.target.checked)}
                required
              />
              <span>قوانین و شرایط استفاده از سامانه را می‌پذیرم</span>
            </label>
          </div>

          <div className="btn-wrapper">
            <button type="submit">ثبت نام</button>
            <a href="/login">قبلاً ثبت نام کرده‌اید؟</a>
          </div>
        </form>

        <div className="other-connect">
          <p className="title">
            <span>یا از طریق</span>
          </p>
          <div className="connect-btn-wrapper">
            {connectBtn.map((btn, i) => (
              <button key={i} style={{ backgroundColor: `${btn.color}` }}>
                <p>{btn.text}</p>
                <i className={btn.icon}></i>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
