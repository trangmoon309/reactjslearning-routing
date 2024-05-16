import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage></HomePage>} />
//     <Route path="/products" element={<ProductPage></ProductPage>} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  // Each object represent one row
  { 
    path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/products', element: <ProductPage />},
      { path: '/products/:productId', element: <ProductDetailPage />},
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
