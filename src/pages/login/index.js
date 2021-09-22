import React, { memo, useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Script from "react-load-script";
import Avatar from "./c-cpns/avatar/index";
import { LoginStyle } from "./style.js";
import { getSignAction, getLoginAction } from "./store/actionCreators";

export default memo(function Login(props) {
  const can = useRef();
  console.log(props.match.params.switch);
  const [show, setShow] = useState(false);
  const [name, setName] = useState(null);
  const [avatarImg, setAvatarImg] = useState(null)
  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);

  const [name0, setName0] = useState(null);
  const [password0, setPassword0] = useState(null);

  const dispatch = useDispatch();
  const sign = () => {
    dispatch(getSignAction(name, password1, password2, avatarImg));
  };
  const login = () => {
    dispatch(getLoginAction(name0, password0));
  };
  useEffect(() => {
    if (props.match.params.switch === "login") {
      setShow(false);
    } else if (props.match.params.switch === "signin") {
      setShow(true);
    }
  }, []);

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
                  <input
                    type="text"
                    placeholder="账号"
                    onChange={(e) => {
                      setName0(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="密码"
                    onChange={(e) => {
                      setPassword0(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="inputBox">
                  <input
                    type="submit"
                    placeholder="登陆"
                    onClick={login}
                  ></input>
                </div>
              </form>
            </div>
            <div className={`form sign ${show === false ? "swi" : ""} `}>
              <h2>注册</h2>
              <form>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="账号"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>{" "}
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="密码"
                    onChange={(e) => {
                      setPassword1(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="确认密码"
                    onChange={(e) => {
                      setPassword2(e.target.value);
                    }}
                  ></input>
                </div>
                <Avatar setAvatarImg={setAvatarImg}/>
                <div className="inputBox">
                  <input
                    type="submit"
                    placeholder="注册"
                    onClick={sign}
                  ></input>
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
          切换
        </button>
      </div>
    </LoginStyle>
  );
});
