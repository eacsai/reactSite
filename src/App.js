//第三方
import React, { memo,Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import{ Provider } from 'react-redux'
//工具类
import routes from "./router";
import store from "./store"
//组件
import AppFooter from "components/App-footer";
import AppHeader from "components/App-header";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter />
      </HashRouter>
    </Provider>
  );
});
