import React, { memo, createElement, useState, useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
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

import {
  getHomePagesAction,
} from "@/pages/home/store/actionCreators";

import { DetailStyle } from "./style";
import Tocify from "@/components/tocify";

export default memo(function Detail() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const { TextArea } = Input;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomePagesAction());
  }, [dispatch]);

  const { pageData } = useSelector((state) => ({
    pageData: state.getIn(["home", "homePages"]),
  }));
  
  let tmpText = pageData[0]&&pageData[0].content;
  if(tmpText === undefined){
    tmpText = ''
  }
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

  //评论相关参数
  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );

  const handleChange = () => {};
  const handleSubmit = () => {};
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <div style={{ backgroundColor: "rgb(244, 245, 245)" }}>
      <DetailStyle>
        <div className="detail-content">
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: marked(tmpText) }}
          ></div>
          <div className="content-subtitle">2 Comments</div>
          <div className="content-line2"></div>
          <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={false}
                value={""}
              />
            }
          />
        </div>
        <div className="anchor">
          {/* <Anchor>
            <div className="markNav-title">文章目录</div>
            <MarkNav
              updateHashAuto={false}
              className="article-menu"
              source={input}
              headingTopOffset={80}
            />
          </Anchor> */}
          <div className="nav-title">文章目录</div>
          <div className="toc-list">{tocify && tocify.render()}</div>{" "}
        </div>
      </DetailStyle>
    </div>
  );
});
