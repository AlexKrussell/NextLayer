import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Generator } from "./pages/Generator";
import { Contact } from "./pages/Contact";
import { Copyright } from "./pages/Copyright";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "gallery", Component: Gallery },
      { path: "generator", Component: Generator },
      { path: "contact", Component: Contact },
      { path: "copyright", Component: Copyright },
    ],
  },
]);
