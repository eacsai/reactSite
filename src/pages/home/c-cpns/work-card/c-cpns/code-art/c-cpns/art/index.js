import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ArtStyle } from "./style";
export default memo(function Art() {

  const { workImages } = useSelector(
    (state) => ({
      workImages: state.getIn(["home", "homeWorks"]),
    }),
    shallowEqual
  );
  return (
    <ArtStyle>
      {workImages?.slice(0, 5).map((item, index) => {
        return (
          <img
            src={item.picUrl}
            alt=""
            key={index}
            className="work-list"
          ></img>
        );
      })}
    </ArtStyle>
  );
});
