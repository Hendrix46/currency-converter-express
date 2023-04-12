import {createBrowserRouter, Navigate} from 'react-router-dom';
import CurrencyList from "../pages/CurrencyList";
import Converter from "../pages/Converter";
import {MenuLayout} from "../components/Layout/DashboardLayout";

const routePaths = {
    CURRENCY_LIST : "/currencies",
    CONVERTER : "/converter",
}

export const router = createBrowserRouter([
    {
        element: <MenuLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={routePaths.CURRENCY_LIST} />,
            },
            {
                path: routePaths.CURRENCY_LIST,
                element:  <CurrencyList />,
            },
            {
                path: routePaths.CONVERTER,
                element: <Converter />,
            }
        ]
    }
]);

