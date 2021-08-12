import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ArtStyle } from "./style";
export default memo(function Art() {

  const { homeWorks} = useSelector(
    (state) => ({
      homeWorks: state.getIn(["home", "homeWorks"]),
    }),
    shallowEqual
  );
  console.log('----', homeWorks);
  return (
    <ArtStyle>
      {homeWorks.slice(0, 4).map((item, index) => {
        return (
          <img
            src={item}
            alt=""
            key={index}
            className="work-list"
          ></img>
        );
      })}
    </ArtStyle>
  );
});
