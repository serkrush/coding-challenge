import Coutry from "./pages/Coutry"
import Home from "./pages/Home"
import { HOME_ROUTE, COUNTRY_ROUTE, CODE_ROUTE } from "./utils/consts"

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home />
    },
    {
        path: COUNTRY_ROUTE + '/:name',
        Component: <Coutry />
    },
    {
        path: CODE_ROUTE + '/:code',
        Component: <Coutry />
    }
]