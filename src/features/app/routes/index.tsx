import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
