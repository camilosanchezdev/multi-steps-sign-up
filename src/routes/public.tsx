import { Navigate } from "react-router-dom";
import { lazyImport } from "@/utils/lazyImport";
import { App } from "@/features/app";
const { AuthRoutes } = lazyImport(
  () => import("@/features/auth"),
  "AuthRoutes"
);

export const publicRoutes = [
  {
    path: "",
    element: <App />,
    children: [
      { path: "/auth/*", element: <AuthRoutes /> },
      { path: "", element: <Navigate to="/auth" /> },
    ],
  },
];

export const PUBLIC_ROUTES = {
  HOME: "/",
  AUTH: "/auth",
};
