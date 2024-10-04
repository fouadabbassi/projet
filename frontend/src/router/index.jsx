import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../page/ProductPage";
import SingleProductPage from "../page/SingleProductPage";
import ConfirmationPage from "../page/ConfirmationPage";
import CardPage from "../page/CardPage";
import LoginPage from "../page/auth/LoginPage";
import NotFoundPage from "../page/auth/NotFoundPage";
import Navbar from "../page/Navbar.jsx";
import Landing from "../page/LandingPage.jsx";
import DashboardLayout from "../page/auth/DashboardPage";
import UsersPage from "../compenents/dashboard/UsersPage.jsx";
import CategoriesPage from "../compenents/dashboard/CategoriesPage.jsx";
import SubcategoriesPage from "../compenents/dashboard/SubcategoriesPage.jsx";
import ProductsPage from "../compenents/dashboard/ProductsPage.jsx";
import OrdersPage from "../compenents/dashboard/OrdersPage.jsx";
import MessagesPage from "../compenents/dashboard/MessagesPage.jsx";

export const router = createBrowserRouter([
    {
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <Landing />,
            },
            {
                path: "/produits",
                element: <ProductPage />,
            },
            {
                path: "/produits/:id", // Use :id for dynamic parameter
                element: <SingleProductPage />, // Pass props from useParams in the component
            },
            {
                path: "/confirmation",
                element: <ConfirmationPage />,
            },
            {
                path: "/panier",
                element: <CardPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "users",
                element: <UsersPage />, // CRUD for Users
            },
            {
                path: "categories",
                element: <CategoriesPage />, // CRUD for Categories
            },
            {
                path: "subcategories",
                element: <SubcategoriesPage />, // CRUD for Subcategories
            },
            {
                path: "products",
                element: <ProductsPage />, // CRUD for Products
            },
            {
                path: "orders",
                element: <OrdersPage />, // CRUD for Orders
            },
            {
                path: "messages",
                element: <MessagesPage />, // CRUD for Messages
            },
        ],
    },
]);
