import React, { memo } from "react";
import { CodeArtStyles } from "./style";
import Code from './c-cpns/code'
import Art from './c-cpns/art'
export default memo(function CodeArt() {
  return (
    <CodeArtStyles>
      <div className="container">
        <dict className="content-title">CODE</dict>
        <div className="content-subtitle">New Page</div>
        <div className="content-line" />
        {/* 插入code组件 */}
        <Code/>
        <div className="content-line2" />
        <div className="view-more">view more</div>
        <div className="content-title">ART</div>
        <div className="content-subtitle">Fresh Works</div>
        <div className="content-line" />
        {/* 插入Art组件 */}
        <Art/>
        <div className="content-line2" />
        <div className="view-more">view more</div>
      </div>
    </CodeArtStyles>
  );
});
