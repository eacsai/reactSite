import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import TopBanner from './c-cpns/top-banner';
import Welcome from './c-cpns/welcome';
import WorkCard from './c-cpns/work-card';
import {
  getHomeBannersAction, getHomePagesAction, getHomeWorksAction, getPageTypesAction
} from "./store/actionCreators.js";

export default memo(function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeBannersAction());
    dispatch(getHomeWorksAction());
    dispatch(getHomePagesAction());
    dispatch(getPageTypesAction());
  }, [dispatch]);

  return (
    <div>
      <TopBanner/>
      <Welcome/>
      <WorkCard/>
    </div>
  );
});
