import React, { memo, useEffect } from "react";
import { FooterStyle } from "./style";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getHomeWorksAction } from "../../pages/home/store/actionCreators";

export default memo(function AppFooter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeWorksAction());
  }, [dispatch]);

  const { homewWorks } = useSelector(
    (state) => ({
      homewWorks: state.getIn(["home", "homeWorks"]),
    }),
    shallowEqual
  );
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
