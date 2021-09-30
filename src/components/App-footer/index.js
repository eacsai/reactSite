import React, { memo } from "react";
import { FooterStyle } from "./style";

export default memo(function AppFooter() {
  const homewWorks = [
    "https://tva1.sinaimg.cn/large/008i3skNly1gt3n5ez0zuj60u00u0tgg02.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2l744toyj308c05kjrl.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt3n541oz2j30u00u0tga.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2g78krfoj30jg0epgnm.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt3n6bnztwj30u00u0q9l.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt3nvolbv5j30u00u0n6y.jpg"
  ]
  return (
    <FooterStyle>
      <div className="foot-text">
        <text>THEMEGOODSPHOTOGRAPHY</text>
        <div className="img-list">
          {homewWorks.map((item) => (
            <img src={item} alt=""></img>
          ))}
        </div>
      </div>
      <div className="tigris">
        <div className="tigris-text1">
          <text>Tigris</text>
        </div>
        <div className="tigris-text2">
          <text>Bilibili</text>
          <text>Facebook</text>
          <text>github</text>
          <text>hitdn110</text>
        </div>
      </div>
    </FooterStyle>
  );
});
