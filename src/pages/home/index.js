import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import TopBanner from './c-cpns/top-banner';
import Welcome from './c-cpns/welcome';
import TopImg from './c-cpns/top-img'
import WorkCard from './c-cpns/work-card';
import AppFooter from "../../components/App-footer";
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
      {/* <TopBanner/> */}
      <TopImg/>
      <Welcome/>
      <WorkCard/>
      <AppFooter />
    </div>
  );
});
