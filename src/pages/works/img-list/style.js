import styled from "styled-components";

export const ImgListStyle = styled.div`
  .works-img {
    height: 700px;
    background: url("https://tva1.sinaimg.cn/large/008i3skNly1gtr005wg7xj61c00u0wm702.jpg")
      no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .work-list {
    width: 100%;
  }
  .box {
    width: 0;
    position: absolute;
  }
  .container {
    margin: 100px auto;
    min-width: 1200px;
    width: 66%;
    position: relative;
  }
  canvas {
    background-image: radial-gradient(#666, #333);
  }
`;
