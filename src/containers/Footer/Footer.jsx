import React from "react";
import "./footer.css";
import banner1 from "../../assets/Footer/Banner-1.webp";
import banner2 from "../../assets/Footer/Banner-2.webp";
import banner3 from "../../assets/Footer/Banner-3.webp";
import banner4 from "../../assets/Footer/Banner-4.webp";
import Gp from "../../assets/Footer/google-play.webp";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="ul-wrapper">
          <div className="ul-list">
            <div className="ul-header">درباره ما</div>
            <ul>
              <li>
                <Link to="/about-us">درباره آروند پلیمر</Link>
              </li>
              <li>
                <a href="#">دفاتر نمایندگی</a>
              </li>
              <li>
                <a href="#">مرکز آموزش</a>
              </li>
              <li>
                <a href="#">وبلاگ</a>
              </li>
            </ul>
          </div>
          <div className="ul-list">
            <div className="ul-header">قوانین و مقررات</div>
            <ul>
              <li>
                <a href="#">سیاست حفظ حریم خصوصی</a>
              </li>
              <li>
                <a href="#">شرایط و ضوابط</a>
              </li>
              <li>
                <a href="#">سیاست مالکیت معنوی</a>
              </li>
              <li>
                <a href="#">سیاست فهرست محصولات</a>
              </li>
            </ul>
          </div>
          <div className="ul-list">
            <div className="ul-header">تماس با ما</div>
            <ul>
              <li>
                <a href="#">ارسال درخواست شما</a>
              </li>
              <li>
                <a href="#">+9811223344</a>
              </li>
            </ul>
          </div>
          <div className="ul-list ul-pic">
            <ul>
              {/* <li>
                <a href="#">
                  <img src={banner1} alt="banner1" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={banner2} alt="banner2" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={banner3} alt="banner3" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={banner4} alt="banner4" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="icon-wrapper">
          <a href="#">
            <img src="./Logo.png" alt="Logo" style={{ maxWidth: "150px" }} />
          </a>
          {/* <a href="#">
            <img src={Gp} alt="googlePlay" style={{ minWidth: "140px" }} />
          </a> */}
          <ul className="ul-icon">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="description-wrapper">
          <p>
            تمامی پیشنهادات، محصولات، پروفایل شرکت‌ها، تصاویر و سایر محتواهای
            ارسال شده توسط کاربران است و آروند پلیمر هیچ مسئولیتی در قبال این
            محتواها ندارد.
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>کلیه حقوق این سایت متعلق به آروند پلیمر می‌باشد © ۲۰۲۴</p>
      </div>
    </footer>
  );
}
