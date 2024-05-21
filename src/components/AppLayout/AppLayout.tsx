import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const AppLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};
