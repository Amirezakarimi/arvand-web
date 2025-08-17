import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layouts/web/WebLayout";
import Home from "../pages/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Category from "../pages/Category/Category";
import SubCategory from "../pages/SubCategory/SubCategory";
import PanelLayout from "../layouts/Panel/PanelLayout";
import PanelProfile from "../pages/PanelProfile/PanelProfile";
import PanelNewProduct from "../pages/PanelNewProduct/PanelNewProduct";
import PanelProductList from "../pages/PanelProductList/PanelProductList";
import AboutUs from "../pages/AboutUs/AboutUs";
import Product from "../pages/Product/Product";
import MainCategory from "../pages/MainCategory/MainCategory";
import LoginPage from "../pages/LoginPage/LoginPage";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <Category />,
      },
      {
        path: "products/:mainCat",
        element: <MainCategory />,
      },
      {
        path: "products/:mainCat/:subCat",
        element: <SubCategory />,
      },
      {
        path: "products/:mainCat/:subCat/:productName",
        element: <Product />,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <PanelLayout />,
    children: [
      {
        index: true,
        element: <PanelProfile />,
      },
      {
        path: "Profile",
        element: <PanelProfile />,
      },
      {
        path: "NewProduct",
        element: <PanelNewProduct />,
      },
      {
        path: "ProductLists",
        element: <PanelProductList />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default Router;
