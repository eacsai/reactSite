import React, { memo, useEffect, useState } from "react";
import { ImgStyle } from "./style";
export default memo(function TopImg() {
  const [height, setHeight] = useState(document.body.clientHeight);
  const [width, setWidth] = useState(document.body.clientWidth);
  const imgSize = () => {
    setHeight(document.body.clientHeight);
    setWidth(document.body.clientWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", imgSize);
  });
  return (
    <ImgStyle >
      <div style={{ height, width }} className="top-img">
        <div class="img-text">Inno's Blog</div>
        <div class="img-subtext">Welcome to My World</div>
      </div>
    </ImgStyle >
  );
});
