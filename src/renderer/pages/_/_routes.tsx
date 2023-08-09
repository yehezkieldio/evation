import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "../home";
import { AnotherPage } from "../another-page";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/another-page",
        element: <AnotherPage />,
    },
]);

export default function Routes(): JSX.Element {
    return <RouterProvider router={router} />;
}
