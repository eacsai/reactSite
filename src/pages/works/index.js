import { BackTop } from "antd";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ImgList from "./img-list/ImgList";
import { getPageTypesAction } from "./store/actionCreators.js";
import { ArtStyle } from "./style";

export default memo(function Works() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPageTypesAction());
  }, [dispatch]);

  const { workImages } = useSelector(
    (state) => ({
      workImages: state.getIn(["works", "workImages"]),
    }),
    shallowEqual
  );

  return (
    <ArtStyle>
      <BackTop />
      <ImgList workImages = {workImages}></ImgList>
    </ArtStyle>
  );
});
