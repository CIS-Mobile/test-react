import AuthGuard from "app/auth/AuthGuard";
import chartsRoute from "app/views/charts/ChartsRoute";
import materialRoutes from "app/views/material-kit/MaterialRoutes";
import startRoutes from "app/views/start/StartRoutes";
import NotFound from "app/views/sessions/NotFound";
import sessionRoutes from "app/views/sessions/SessionRoutes";
import { Navigate } from "react-router-dom";
import MatxLayout from "./components/MatxLayout/MatxLayout";

const routes = [
	{
		element: (
			<AuthGuard>
				<MatxLayout />
			</AuthGuard>
		),
		children: [...chartsRoute, ...materialRoutes, ...startRoutes],
	},
	...sessionRoutes,
	{ path: "/", element: <Navigate to="/start" /> },
	{ path: "*", element: <NotFound /> },
];

export default routes;
