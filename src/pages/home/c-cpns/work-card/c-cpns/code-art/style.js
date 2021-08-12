import styled from "styled-components";

export const CodeArtStyles = styled.div`
  flex: 3;
  margin-top: 30px;
  text-align: center;
  .container {
    margin: 0px 60px;
    .content-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 10px;
      color: #be9656;
    }
    .content-subtitle {
      font-family: "Josefin";
      font-size: 30px;
      font-weight: 600;
    }
    .content-line {
      margin: 20px auto;
      width: 10%;
      height: 1px;
      border-top: solid #be9656 2px;
    }
    .content-line2 {
      margin: 20px auto;
      width: 3%;
      height: 1px;
      border-top: solid #000 1px;
    }
    .view-more {
      margin-top: 20px;
      font-size: 16px;
      font-family: "Varela Round";
      font-weight: 400;
      letter-spacing: 4px;
    }
  }
`;
