import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main className="container mx-auto px-4 md:px-0">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
