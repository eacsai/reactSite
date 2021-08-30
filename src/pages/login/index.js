import React, { memo, useRef, useEffect, useState } from "react";
import Script from "react-load-script";
import { LoginStyle } from "./style.js";
export default memo(function Login() {
  const can = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);

  return (
    <LoginStyle>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box">
        <div className="circle" color="0"></div>
        <div className="circle" color="1"></div>
        <div className="circle" color="2"></div>
        <div className="circle" color="3"></div>
        <div className="circle" color="4"></div>
        <div className={`turn ${show === true ? "active" : ""} `}>
          <div className={`over`}>
            <div className={`form ${show === true ? "swi" : ""} `}>
              <h2>登陆</h2>
              <form>
                <div className="inputBox">
                  <input type="text" placeholder="账号"></input>
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="密码"></input>
                </div>
                <div className="inputBox">
                  <input type="submit" placeholder="登陆"></input>
                </div>
              </form>
            </div>
            <div className={`form sign ${show === false ? "swi" : ""} `}>
              <h2>注册</h2>
              <form>
                <div className="inputBox">
                  <input type="text" placeholder="账号"></input>
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="密码"></input>
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="确认密码"></input>
                </div>
                <div className="inputBox">
                  <input type="submit" placeholder="注册"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
        <input type="checkbox" style={{ display: "none" }} id="change"></input>
        <button
          className="change"
          onClick={() => {
            setShow(!show);
          }}
        >
          点击注册
        </button>
      </div>
    </LoginStyle>
  );
});
