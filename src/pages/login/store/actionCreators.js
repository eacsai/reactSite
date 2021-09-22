import * as actionTypes from "./constants";
import { login, sign } from "@/services/login";
import setAuthToken from "@/utils/AuthToken";
const signSuccessAction = (data) => ({
  type: actionTypes.SIGN_SUCCESS,
  data: data,
});

const signFailedAction = (msg) => ({
  type: actionTypes.SIGN_FAILURE,
  msg: msg,
});

const loginSuccessAction = (data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  data: data,
})

const loginFailedAction = (msg) => ({
  type: actionTypes.LOGIN_FAILURE,
  msg: msg,
})


export const getLoginAction = (username, password) => {
  return (dispatch) => {
    if (!username || !password) {
      dispatch(signFailedAction("密码账号不能为空"));
      return
    }
    login(username, password).then((res) => {
      console.log('===============================',res)
      if (res.status === 200) {
        const { token } = res.data;
        localStorage.setItem('jwToken',token)
        setAuthToken(token)
        console.log('res',res.data)
        dispatch(loginSuccessAction(res.data));
      } else {
        dispatch(loginFailedAction(res.msg));
      }
    });
  };
};

export const getSignAction = (username, password1, password2, avatarImg) => {
  return (dispatch) => {
    if (!username || !password1) {
      dispatch(signFailedAction("密码账号不能为空"));
      return
    }
    if (password1 !== password2) {
      dispatch(signFailedAction("两次密码不一致"));
      return
    }
    sign(username, password1, password2, avatarImg).then((res) => {
      if (res.status === 200) {
        const { token } = res.data;
        localStorage.setItem('jwToken',token)
        setAuthToken(token)
        console.log('res',res.data)
        dispatch(signSuccessAction(res.data));
      } else {
        dispatch(signFailedAction(res.msg));
      }
    });
  };
};
