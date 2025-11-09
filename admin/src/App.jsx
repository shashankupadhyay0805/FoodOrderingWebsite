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

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // --- START: IMPORTS ---
// import AddRestaurant from "./components/admin/AddRestaurant";
// import AddMenu from "./components/admin/AddMenu";
// import ManageOrder from "./components/admin/ManageOrder";
// import RestaurantList from "./components/admin/RestaurantList";

// import AdminLogin from "./components/adminpage/AdminLogin.jsx";
// import AdminProtectedRoute from "./components/adminpage/AdminProtectedRoute.jsx";
// import ManageMenus from "./components/adminpage/ManageMenus.jsx"; 

// // 1. Import your new ManageUsers component
// // (Make sure this file exists at this path)
// import ManageUsers from "./components/adminpage/ManageUsers.jsx"; 

// // Import your layout
// import AdminLayout from "./components/AdminLayout.jsx"; 
// // --- END: IMPORTS ---


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* ROUTE 1: THE LOGIN PAGE */}
//         <Route path="/admin-login" element={<AdminLogin />} />

//         {/* ROUTE 2: YOUR PROTECTED ADMIN PAGES */}
//         <Route
//           path="/admin"
//           element={
//             <AdminProtectedRoute>
//               <AdminLayout />
//             </AdminProtectedRoute>
//           }
//         >
//           {/* Child routes rendered inside AdminLayout */}
//           <Route index element={<RestaurantList />} />
//           <Route path="restaurants" element={<RestaurantList />} />
//           <Route path="add-restaurant" element={<AddRestaurant />} />
//           <Route path="add-menu/:restaurantId" element={<AddMenu />} />
//           <Route path="manage-orders" element={<ManageOrder />} />
// M       <Route path="menus" element={<ManageMenus />} />
          
//           {/* 2. Add the new route for Users */}
//           <Route path="users" element={<ManageUsers />} />

//         </Route>

//         {/* A default route to send users to login */}
//         <Route path="/" element={<AdminLogin />} />
//       </Routes>
//       <ToastContainer />
//     </BrowserRouter>
//   );
// };

// export default App;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// --- START: IMPORTS ---
import AddRestaurant from "./components/admin/AddRestaurant";
import AddMenu from "./components/admin/AddMenu";
import ManageOrder from "./components/admin/ManageOrder";
import RestaurantList from "./components/admin/RestaurantList"; // This is the component we want to show

import AdminLogin from "./components/adminpage/AdminLogin.jsx";
import AdminProtectedRoute from "./components/adminpage/AdminProtectedRoute.jsx";
// import ManageMenus from "./components/adminpage/ManageMenus.jsx"; // We don't need this file anymore
import ManageUsers from "./components/adminpage/ManageUsers.jsx"; 
import AdminLayout from "./components/AdminLayout.jsx"; 
// --- END: IMPORTS ---


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<RestaurantList />} />
          <Route path="restaurants" element={<RestaurantList />} />
          <Route path="add-restaurant" element={<AddRestaurant />} />
          <Route path="add-menu/:restaurantId" element={<AddMenu />} />
          <Route path="manage-orders" element={<ManageOrder />} />
          
          {/* --- THIS IS THE FIX --- */}
          {/* We've changed the element from ManageMenus to RestaurantList */}
          <Route path="menus" element={<RestaurantList />} />
          
          <Route path="users" element={<ManageUsers />} />
        </Route>

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
