import styled from "styled-components"

export const ContactStyle = styled.div`
  display: flex;
  width: 60%;
  margin: 50px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(53px);
  .contact-img{
    margin: 10px;
    width: 80%;
    height: 600px;
    background: url('https://tva1.sinaimg.cn/large/008i3skNly1gt2l7bmum3j30jg0ep41u.jpg') center no-repeat;
    background-size: cover;
  }
  .input-form {
    width: 100%;
  }
  .input-group {
    width:100%;
    display: flex;
    justify-content:space-around;
    flex-direction: column;
    align-items: flex-start;
  }
  .input-title{
    width: 80%;
    margin:0px auto;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .input-list {
    margin:10px auto;
    width: 80%;
    height: 40px;
  }
  .input-message {
    position:relative;
    width: 80%;
    margin:10px auto;
  }
  .ant-btn{
    position: absolute;
    bottom: -30px;
    left: 127px;
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    background-color: #888888;
    color: #ffffff;
    border-color: #888888;
  }
`