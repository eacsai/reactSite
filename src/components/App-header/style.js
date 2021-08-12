import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position:fixed;
  top:0px;
  width:100%;
  height: 53px;
  background-color: #fff;
  border-bottom: 1px solid rgba(225, 225, 225);
  z-index: 99999;
  .header {
    display:flex;
    height: auto;
  }
  .content {
    flex:1;
    position: relative;
    text-align:center;
    line-height:53px;
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #444444;
  }
  .content:after {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-top: 2px solid #656565;
    border-right: 2px solid #656565;
    transform: translate(50%,-25%) rotate(135deg);
  }
`