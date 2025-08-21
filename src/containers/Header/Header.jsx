import React, { useState } from "react";
import "./Header.css";
import SetOrderCol from "../../components/SetOrderColum/SetOrderCol";

export default function Header() {
  const NavList = [
    { title: "اشتراک ویژه", link: "#" },
    { title: "خریداران", link: "#" },
    { title: "محصولات", link: "/products" },
    { title: "فروشندگان", link: "#" },
    { title: "تولیدکنندگان", link: "#" },
    { title: "تماس با ما", link: "#" },
    { title: "راهنما", link: "#" },
    { title: "فارسی", link: "#" },
  ];
  const [SubMenu, setSubMenu] = useState(false);
  const [NotifShow, setNotifShow] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false); // اضافه کردن state برای مدال

  return (
    <header className="header">
      <div className="container">
        {/* مدال ثبت درخواست */}
        {showOrderModal && (
          <div className="order-modal-overlay" onClick={() => setShowOrderModal(false)}>
            <div className="order-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>ثبت درخواست</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowOrderModal(false)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="modal-content">
                <SetOrderCol />
              </div>
            </div>
          </div>
        )}

        <div className={`notif-sidebar ${NotifShow ? "fade-in" : ""}`}>
          <p className="title">
            پیام ها{" "}
            <i
              class="fa-solid fa-xmark"
              onClick={() => setNotifShow(false)}
            ></i>
          </p>
          <div className="notif-wrapper">
            <div className="notif-item"></div>
          </div>
        </div>
        <div className="wrapper logo-wrapper">
          <a href="/">
            <picture>
              <source media="(max-width:750px)" srcset="/logoRaw.png" />
              <img src="/Logo.png" alt="Logo" />
            </picture>
          </a>
        </div>
        <div className="wrapper search-wrapper">
          <div className="search-box">
            <input type="search" placeholder="جستجو" />
            <select>
              <option value="products">محصولات</option>
              <option value="companies">شرکت ها</option>
              <option value="buyers">خریداران</option>
            </select>
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="wrapper ul-wrapper">
          <div className="ul-item">
            <i className="fa-solid fa-circle-user"></i>
            <div className="p-wrapper">
              <p>
                <span
                  className="hover"
                  onClick={() => (window.location.href = "/login")}
                >
                  ورود
                </span>
                <span> / </span>
                <span className="hover">پیوستن</span>
              </p>
              <p>حساب کاربری</p>
            </div>
          </div>
          <div className="ul-item" onClick={() => setNotifShow(true)}>
            <i className="fa-solid fa-envelope auto-hover"></i>
            <div className="p-wrapper">
              <p>
                <span className="auto-hover">اعلانات</span>
              </p>
              <p className="auto-hover">پیام ها</p>
            </div>
          </div>
          {/* دکمه ثبت درخواست */}
          <div className="ul-item">
            <button 
              className="request-btn"
              onClick={() => setShowOrderModal(true)}
            >
              ثبت درخواست
            </button>
          </div>
        </div>
        <div className="wrapper mobile-wrapper">
          <i class="fa-solid fa-bars" onClick={() => setSubMenu(!SubMenu)}></i>
          {SubMenu && (
            <div className="sub-menu">
              <ul>
                {NavList.map((nav, n) => (
                  <li key={n} className="nav-item">
                    <a href={nav.link}>{nav.title}</a>
                  </li>
                ))}
              </ul>

              <button
                className="request-btn"
                onClick={() => setShowOrderModal(true)}
              >
                ثبت درخواست
              </button>

              <div className="wrapper ul-wrapper mobile-icon-wrapper">
                <div className="ul-item">
                  <i className="fa-solid fa-circle-user"></i>
                </div>
                <div className="ul-item">
                  <i className="fa-solid fa-envelope auto-hover"></i>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
