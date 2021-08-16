import styled from "styled-components";

export const DetailStyle = styled.div`
  display: flex;
  max-width: 1800px;
  margin:100px auto;
  .detail-content{
    flex: 4;
    width: 100%;
    overflow: hidden;
    background-color:rgb(244, 245, 245);
    .page-content{
      margin: 100px 100px;
      font-size:16px;
      background-color: #fff;
      padding: 50px;
    }
  }
  .anchor{
    flex: 1;
    overflow: hidden;
    background-color:rgb(244, 245, 245);
    .markNav-title{
      margin-top:100px;

    }
  }
`