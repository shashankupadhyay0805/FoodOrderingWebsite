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

// --- START: CORRECTED IMPORTS ---

// These are in 'src/components/admin/'
import AddRestaurant from "./components/admin/AddRestaurant";
import AddMenu from "./components/admin/AddMenu";
import ManageOrder from "./components/admin/ManageOrder";
import RestaurantList from "./components/admin/RestaurantList";

// These are in 'src/components/adminpage/'
import AdminLogin from "./components/adminpage/AdminLogin.jsx";
import AdminProtectedRoute from "./components/adminpage/AdminProtectedRoute.jsx";

// This is directly in 'src/components/'
import AdminLayout from "./components/AdminLayout.jsx"; 

// --- END: CORRECTED IMPORTS ---


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROUTE 1: THE LOGIN PAGE */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ROUTE 2: YOUR PROTECTED ADMIN PAGES */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          {/* Child routes rendered inside AdminLayout */}
          <Route index element={<RestaurantList />} />
          <Route path="restaurants" element={<RestaurantList />} />
          <Route path="add-restaurant" element={<AddRestaurant />} />
    _     <Route path="add-menu/:restaurantId" element={<AddMenu />} />
          <Route path="manage-orders" element={<ManageOrder />} />
See     </Route>

        {/* A default route to send users to login */}
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
