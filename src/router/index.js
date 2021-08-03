import { Redirect } from "react-router-dom";
import Home from "pages/home";
import Pages from "pages/pages";
import Works from "pages/works";
import Contact from "pages/contact";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/home"/>
    )
  },
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/pages",
    component: Pages
  },
  {
    path: "/works",
    component: Works
  },
  {
    path: "/contact",
    component: Contact
  }
];

export default routes;