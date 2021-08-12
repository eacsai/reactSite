import React, { memo } from "react";
import { ContactStyle } from "./style";
import { Input,Button } from "antd";

const { TextArea } = Input;
export default memo(function Contact() {
  const inputList = ["NAME:", "SUBJECT:", "EMAIL:"];
  return (
    <ContactStyle>
      <div className="contact-header">
        <div className="content-subtitle">Contact Me</div>
        <div className="content-line1"></div>
        <div className="content-sstitle">LETS GET INTOUCH</div>
      </div>
      <div className="contact-img"></div>
      <div
        className="content-text"
        style={{ textAlign: "start", width: "80%", margin: "30px auto 10px" }}
      >
        Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit
        amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris
        elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam
        et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor
        sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur
        adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo
        vel tempor.
      </div>
      <div
        className="content-text"
        style={{ textAlign: "start", width: "80%", margin: "0px auto 10px" }}
      >
        Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et
        malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
        montes
      </div>
      <form method="post" action="" className="input-form">
        {inputList.map((item, index) => {
          return (
            <div className="input-group">
              <div className="input-title">{item}</div>
              <Input className="input-list" />
            </div>
          );
        })}
        <div className="input-group">
          <div className="input-title">MESSAGE:</div>
          <TextArea rows={8} className="input-message" />
          <Button>Default</Button>
        </div>
      </form>
    </ContactStyle>
  );
});
