// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import AddRestaurant from "./components/admin/AddRestaurant";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AddMenu from "./components/admin/AddMenu";
// import ManageOrder from "./components/admin/ManageOrder";
// // 1. Import the new component
// import RestaurantList from "./components/admin/RestaurantList"; // <-- THIS WAS MISSING

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         {/* 2. Add the new route to your list */}
//         <Route path="/admin/restaurants" element={<RestaurantList />} /> 
        
//         <Route path="/admin/add-restaurant" element={<AddRestaurant />} />
//         <Route path="/admin/add-menu/:restaurantId" element={<AddMenu />} />
//         <Route path="/admin/manage-orders" element={<ManageOrder />} />
//       </Routes>
//       <ToastContainer />
//     </BrowserRouter>
//   );
// };

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 1. Import all your components
import AddRestaurant from "./components/admin/AddRestaurant";
import AddMenu from "./components/admin/AddMenu";
import ManageOrder from "./components/admin/ManageOrder";
import RestaurantList from "./components/admin/RestaurantList";

// 2. Import your LOGIN and LAYOUT components
// (You might need to fix these paths if they are wrong)
import AdminLogin from "./components/adminPage/AdminLogin";
import AdminProtectedRoute from "./components/adminPage/AdminProtectedRoute";
import AdminLayout from "./components/AdminLayout"; // This is your sidebar layout

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROUTE 1: THE LOGIN PAGE 
          This is a public page. 
          Note: We are NOT rendering the <Navbar /> here.
        */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ROUTE 2: YOUR PROTECTED ADMIN PAGES
          This wrapper does two things:
          1. <AdminProtectedRoute> checks if the user is logged in.
          2. <AdminLayout> shows the sidebar and renders all child routes.
        */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          {/* These are the CHILD ROUTES. 
            They will be rendered inside <AdminLayout>'s <Outlet />.
            We also add a default "index" route.
          */}
          <Route index element={<RestaurantList />} /> {/* Default admin page */}
          <Route path="restaurants" element={<RestaurantList />} />
          <Route path="add-restaurant" element={<AddRestaurant />} />
          <Route path="add-menu/:restaurantId" element={<AddMenu />} />
          <Route path="manage-orders" element={<ManageOrder />} />
          {/* Add routes for "Menus" and "Users" from your layout here */}
          
        </Route>

        {/* Optional: A default route to send users to login */}
        <Route path="/" element={<AdminLogin />} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;






































// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import AddRestaurant from "./components/admin/AddRestaurant";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import AddMenu from "./components/admin/AddMenu";
// // import ManageOrder from "./components/admin/ManageOrder";

// // const App = () => {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/admin/add-restaurant" element={<AddRestaurant />} />
// //         <Route path="/admin/add-menu/:restaurantId" element={<AddMenu />} />
// //         <Route path="/admin/manage-orders" element={<ManageOrder />} />
// //       </Routes>
// //       <ToastContainer />
// //     </BrowserRouter>
// //   );
// // };

// // export default App;



// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import AddRestaurant from "./components/admin/AddRestaurant";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import AddMenu from "./components/admin/AddMenu";
// // import ManageOrder from "./components/admin/ManageOrder";
// // // 1. Import the new component
// // import RestaurantList from "./components/admin/RestaurantList";

// // const App = () => {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />
// //       <Routes>
// //         {/* 2. Add the new route to your list */}
// //         <Route path="/admin/restaurants" element={<RestaurantList />} />
// //         <Route path="/admin/add-restaurant" element={<AddRestaurant />} />
// //         <Route path="/admin/add-menu/:restaurantId" element={<AddMenu />} />
// //         <Route path="/admin/manage-orders" element={<ManageOrder />} />
// //       </Routes>
// //       <ToastContainer />
// //     </BrowserRouter>
// //   );
// // };

// // export default App;
