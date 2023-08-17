import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const Start = Loadable(lazy(() => import("./Start")));

const dashboardRoutes = [
	{ path: "/start", element: <Start />, auth: authRoles.admin },
];

export default dashboardRoutes;
