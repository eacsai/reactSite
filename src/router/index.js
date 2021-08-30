import { Redirect } from "react-router-dom";
import Home from "pages/home";
import Pages from "pages/pages";
import PageAll from "pages/pages/c-cpns/page-all";
import Detail from "pages/pages/c-cpns/detail";
import Works from "pages/works";
import Contact from "pages/contact";
import Login from "pages/login";
const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/pages",
    component: Pages,
    routes: [
      {
        path: "/pages",
        exact: true,
        render: () => (
          <Redirect to="/pages/pageAll"/>
        )
      },
      {
        path: "/pages/pageAll/",
        component: PageAll,
      },
      {
        path: "/pages/detail/",
        component: Detail,
      },
    ],
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/works",
    component: Works,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/login",
    component: Login,
  }
];

export default routes;
