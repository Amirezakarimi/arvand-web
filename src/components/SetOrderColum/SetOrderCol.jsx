import React, { useState, useEffect } from "react";
import "./SetOrderCol.css";
import PostReq from "../../hooks/PostReq";
import SelectMui from "../Inputs/SelectMui";
import DatePickerMui from "../Inputs/DatePickerMui";
import ImageUplaoder from "./ImageUplaoder";
export default function SetOrderCol() {
  const [Params, setParams] = useState();
  const [FormChange, setFormChange] = useState();
  const [File, setFile] = useState();

  const FetchParams = async () => {
    const result = await PostReq({
      method: "GET",
      url: "/setting/order-params",
      body: {},
    });
    setParams(result);
  };
  // const Upload = async () => {
  //   const result = await PostReq({
  //     method: "post",
  //     url: "/panel/user/upload",
  //     body: {},
  //   });
  // };
  const SendForm = async () => {
    const result = await PostReq({
      method: "post",
      url: "/setting/add-order",
      body: { ...FormChange },
    });
  };
  useEffect(() => {
    FetchParams();
  }, []);
  const handleChangeForm = (param, value) => {
    setFormChange((prev) => ({
      ...prev,
      [param]: value,
    }));
  };
  console.log(FormChange);
  return (
    <div className="SetOrderCol">
      <div className="container">
        <p className="title">ثبت درخواست</p>
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="category">نیازمندی</label>
            <select
              id="category"
              onChange={(e) => handleChangeForm("reason", e.target.value)}
            >
              <option value=""></option>
              {Params &&
                Params.reason.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <div className="input-wrapper W50">
            <label htmlFor="date">تاریخ تحویل</label>
            <DatePickerMui handleAction={handleChangeForm} />
          </div>
          <div className="input-wrapper W50">
            <label htmlFor="count">حجم خرید</label>
            <select
              id="count"
              onChange={(e) => handleChangeForm("volume", e.target.value)}
            >
              <option value=""></option>
              {Params &&
                Params.volume.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="phone">شماره تماس</label>
            <input
              type="number"
              id="phone"
              style={{ textAlign: "left" }}
              onChange={(e) => handleChangeForm("mobile", e.target.value)}
            />
          </div>
          <div className="input-wrapper W50">
            <label htmlFor="company">شرکت</label>
            <input
              type="text"
              id="company"
              style={{ textAlign: "right" }}
              onChange={(e) => handleChangeForm("company", e.target.value)}
            />
          </div>
          <div className="input-wrapper W50">
            <label htmlFor="metod">طریقه خرید</label>
            <select
              id="metod"
              onChange={(e) => handleChangeForm("payMethod", e.target.value)}
            >
              <option value=""></option>
              {Params &&
                Params.payMethod.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <div className="input-wrapper">
            <ImageUplaoder handleChangeForm={handleChangeForm} />
          </div>
        </div>
        <button className="submit-btn" onClick={SendForm}>
          ارسال سفارش
        </button>
        <span>بعد از تایید مدیریت سفارش شما پردازش خواهد شد.</span>
      </div>
    </div>
  );
}
