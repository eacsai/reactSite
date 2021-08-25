import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import TopBanner from "../home/c-cpns/top-banner";
import { PagesAllStyle } from "./style";
import AppFooter from "../../components/App-footer";
export default memo(function Pages(props) {
  const { route } = props;
  return (
    <PagesAllStyle>
      <TopBanner />
      {renderRoutes(route.routes)}
      <AppFooter />
    </PagesAllStyle>
  );
});
