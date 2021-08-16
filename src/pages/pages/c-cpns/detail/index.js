import React, { memo, createElement, useState, useEffect } from "react";
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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

//markdown
import ReactMarkdown from "react-markdown";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";

//github评论
import GitalkComponent from "gitalk/dist/gitalk-component";

import md from "./js面试题.md";
import CodeBlock from "./CodeBlock.js";
import TopBanner from "../../../home/c-cpns/top-banner";

import { DetailStyle } from "./style";
export default memo(function Detail() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const { TextArea } = Input;
  const [value,setValue] = useState('')
  const [submitting, setSubmitting] = useState(false);
  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
    />
  );

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

  const handleChange = () => {
    
  }
  const handleSubmit = () => {

  }
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

  const [input, setInput] = useState();
  useEffect(() => {
    fetch(md)
      .then((res) => res.text())
      .then((text) => setInput(text));
  });
  return (
    <div style={{ backgroundColor: "rgb(244, 245, 245)" }}>
      <DetailStyle>
        <div className="detail-content">
          <div className="page-content">
            <ReactMarkdown
              children={input}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={coy}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
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
                value={''}
              />
            }
          />
        </div>
        <div className="anchor">
          <Anchor>
            <div className="markNav-title">文章目录</div>
            <MarkNav
              updateHashAuto={false}
              className="article-menu"
              source={input}
              headingTopOffset={80}
            />
          </Anchor>
        </div>
      </DetailStyle>
    </div>
  );
});
