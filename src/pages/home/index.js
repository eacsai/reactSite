import React, { memo, useRef, useEffect } from "react";
import { Carousel } from "antd";
import { BannerWrapper, Container, Content, Works } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getHomeBannersAction } from "./store/actionCreators.js";

export default memo(function Home() {
  const bannerRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeBannersAction());
  }, [dispatch]);

  // 组件和redux关联: 获取数据和进行操作
  const { homeBanners } = useSelector(
    (state) => ({
      // topBanners: state.get("recommend").get("topBanners")
      homeBanners: state.getIn(["home", "homeBanners"]),
    }),
    shallowEqual
  );

  return (
    <div>
      <BannerWrapper>
        <div className="top-title">
          <div className="title1">Inno</div>
          <div className="title2">BLOG</div>
        </div>
        <div className="left-direction">
          <button
            className="prev"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="next"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </div>
        <Carousel dots={false} autoplay ref={bannerRef}>
          {homeBanners.map((item, index) => {
            return (
              <Container
                className="banner-img"
                img={item}
                key={index}
              ></Container>
            );
          })}
        </Carousel>
      </BannerWrapper>
      <Content >
        <div className="content-title">ART / CODE</div>
        <div className="content-subtitle">Welcome to MyBlog</div>
        <div className="content-line"/>
        <div className="content-text">
        Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla
        </div>
        <div className="content-text">
        purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. …        
        </div>
      </Content >
      <Works>
        <div className="work-pages">
          <div className="work-img">
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-title1">ABOUT ME</div>
            <img src="https://tva1.sinaimg.cn/large/008i3skNly1gt3l2r1d36j30u00u0wji.jpg" alt='' className="card-picture"></img>
            <div className="card-aboutme">Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor.</div>
          </div>
        </div>
      </Works>
    </div>
  );
});
