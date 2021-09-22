import React, { memo, createElement, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Comment,
  Form,
  Button,
  List,
  Input,
  Tooltip,
  Avatar,
  Anchor,
} from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

//markdown
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import { getHomePagesAction } from "@/pages/home/store/actionCreators";

import { DetailStyle } from "./style";
import Tocify from "@/components/tocify";
import { setComment } from "@/services/detail";
import { getComment } from "@/services/detail";
export default memo(function Detail(props) {
  const [isHide1, setIsHide1] = useState(true);
  const [isHide2, setIsHide2] = useState(false);
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const contentRef = useRef()
  useEffect(() => {
    dispatch(getHomePagesAction());
  }, [dispatch]);

  const mydate = new Date();
  const { pageData, data } = useSelector((state) => ({
    pageData: state.getIn(["home", "homePages"]),
    data: state.getIn(["login", "data"]),
  }));
  const { token, username, avatar } = data;
  const [commentList, setCommentList] = useState([]);
  const [topHide,setTopHide] = useState(false);
  const scroll = ()=>{
    document.documentElement.scrollTop < (contentRef?.current.offsetHeight+300) ? setTopHide(false) : setTopHide(true)
  }
  useEffect(() => {
    // data === 'success' ? setIsHide1(false) : setIsHide1(true)
    if (token) {
      setIsHide2(true);
      setIsHide1(false);
    } else {
      setIsHide1(true);
      setIsHide2(false);
    }
    getComment().then((res) => {
      setCommentList(res.data);
    });
    window.addEventListener('scroll', ()=>{
      scroll()
    })
    return (()=>{
      window.removeEventListener('scroll', ()=>{
        scroll()
      })
    })
  }, []);
  console.log(topHide)
  let tmpText = pageData && pageData[0] && pageData[0].content;
  if (tmpText === undefined) {
    tmpText = "";
  }
  const toLogin = () => {
    props.history.push("/login/login");
  };
  const toSignin = () => {
    props.history.push("/login/signin");
  };
  //markdown配置:
  const renderer = new marked.Renderer();
  const tocify = new Tocify();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="/pages/detail/${anchor}" href="#/pages/detail/${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  let comment = "";
  const onChange = (e) => {
    comment = e.target.value;
  };

  const commitComment = () => {
    const date = mydate.toLocaleDateString();
    setComment(username, comment, date, avatar);
    let tmpList = [...commentList, { comment, username, date, avatar }];
    setCommentList(tmpList);
  };

  return (
    <div style={{ backgroundColor: "rgb(244, 245, 245)" }}>
      <DetailStyle>
        <div className="detail-content">
          <div className="page-content" ref={contentRef} >
            <div
              className="content-markdown"
              dangerouslySetInnerHTML={{ __html: marked(tmpText) }}
            ></div>
          </div>
          <div className="content-subtitle">{commentList.length} Comments</div>
          <div className="content-line2"></div>
          {commentList?.map((item) => {
            return (
              <div style={{ display: "flex",width: "100%", justifyContent: 'flex-start'}}>
                <Avatar
                  size={45}
                  src={item.avatar}
                  style={{ marginRight: "20px",marginTop: "20px" }}
                />
                <Comment
                  style={{flex: "1"}}
                  author={<a style={{ color: "#fff" }}>{item.username}</a>}
                  content={<p>{item.comment}</p>}
                  datetime={
                    <Tooltip title={item.date}>
                      <span style={{ color: "#fff" }}>{item.date}</span>
                    </Tooltip>
                  }
                />
              </div>
            );
          })}
          <div className="login">
            <div className="content-subtitle" style={{ marginTop: "50px" }}>
              Post a comment
            </div>
            <div className="content-line2"></div>
            {/* 未登录 */}
            <div className={`content-box ${isHide2 === true ? "hidden" : ""}`}>
              <div className="content-text">
                Before you comment, please first
              </div>
              <div
                className="content-login"
                style={{ background: "skyblue" }}
                onClick={toLogin}
              >
                sign in
              </div>
              <div className="content-text">Or</div>
              <div
                className="content-login"
                style={{ background: "hotpink" }}
                onClick={toSignin}
              >
                sign up
              </div>
            </div>
            {/* 已登陆 */}
            <div className={`reader ${isHide1 === true ? "hidden" : ""}`}>
              <Avatar size={45} src={avatar} style={{ marginRight: "20px" }} />
              <div className="reader-text">
                <div>{username}</div>
                <div>{mydate.toLocaleDateString()}</div>
              </div>
            </div>
            <div className="text-bg">
              <TextArea rows={4} onChange={onChange} />
            </div>
            <div
              className="submit-button"
              onClick={commitComment}
              style={{ cursor: "pointer" }}
            >
              <span>Button</span>
              <div className="wave"></div>
            </div>
          </div>
        </div>
        <div className={`toc ${topHide ? 'top-hide': 'top-show'}`}>{tocify && tocify.render()}</div>
      </DetailStyle>
    </div>
  );
});
