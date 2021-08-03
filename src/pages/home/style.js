import styled from "styled-components";

export const BannerWrapper = styled.div`
  height: auto;
  position: relative;
  .top-title {
    position: relative;
    /* overflow: hidden; */
  }
  .title1 {
    position: absolute;
    top: 60px;
    text-align: center;
    line-height: 68px;
    left: 50%;
    width: 252px;
    height: 108px;
    z-index: 9999;
    transform: translate(-50%);
    font-size: 30px;
    font-weight: 200;
    font-family: Lucida Family;
    letter-spacing: 10px;
    color: #0000009e;
  }
  .title2 {
    position: absolute;
    text-align: center;
    line-height: 108px;
    top: 100px;
    left: 50%;
    width: 252px;
    height: 108px;
    z-index: 9999;
    transform: translate(-50%);
    font-size: 90px;
    font-weight: 200;
    font-family: Lucida Family;
    color: #0000009e;
  }
  .left-direction {
    left: -80px;
    display: flex;
    justify-content: space-between;
  }
  .prev,
  .next {
    position: absolute;
    top: 50%;
    width: 100px;
    height: 100px;
    z-index: 9999;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.2);
    &:after {
      position: absolute;
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      border-top: 1px solid #fff;
      border-right: 1px solid #fff;
      top: 50%;
      left: 50%;
    }
  }
  .prev {
    left: 6%;
    &:after {
      transform: translate(-50%, -50%) rotate(225deg);
    }
  }
  .next {
    left: 90%;
    &:after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
  .ant-carousel {
    margin-top: 120px;
  }
`;
export const Container = styled.div`
  height: 600px;
  background: url(${(props) => props.img});
  background-size: cover;
`;
export const Content = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .content-title {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 10px;
    text-align: center;
    color: #be9656;
  }
  .content-subtitle {
    font-family: "Varela Round", "Georgia", Arial, Verdana, sans-serif;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
  }
  .content-line {
    margin: 20px auto;
    width: 10%;
    height: 1px;
    border-top: solid #000 1px;
  }
  .content-text {
    font-family: Lora, Georgia, serif;
    font-size: 16px;
    text-align: center;
    color: rgb(68, 68, 68, 0.8);
  }
`;
export const Works = styled.div`
  display: flex;
  margin-top: 30px;
  .work-pages {
    flex: 3;
    text-align: center;
    .work-img {
      display: inline-block;
      /* margin: 0 auto; */
      width: 812px;
      height: 541px;
      background: url("https://tva1.sinaimg.cn/large/008i3skNly1gt2l7bmum3j30jg0ep41u.jpg") no-repeat;
      background-size: cover;
    }
  }
  .card {
    flex: 1;
    display: flex;
    flex-direction: column;

    .card-content {
      margin-right:30px;
      text-align: center;
      background: rgb(242, 242, 242)
    }
    .card-title1 {
      margin: 30px 20px;
      padding:10px 0;
      font-family: "Varela Round", Helvetica, Arial, sans-serif;
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 2px;
      color: #222222;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
    }
    .card-picture {
      width:150px;
      height:150px;
    }
    .card-aboutme{
      word-wrap:break-word;
      margin:20px;
      line-height:1.7;
    }
  }
`;
