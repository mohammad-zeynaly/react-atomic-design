import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";

import LoginRoute from "../pages/auth/login/Router";
import SignUpRoute from "../pages/auth/signup/Router";
import ForgetPasswordRoute from "../pages/auth/forgetPassword/Router";

const Routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [LoginRoute, SignUpRoute, ForgetPasswordRoute],
  },
]);

export default Routers;
