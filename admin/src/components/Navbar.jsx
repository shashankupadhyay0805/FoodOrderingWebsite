// import { Link } from 'react-router-dom';
// import { Store, MenuSquare, ClipboardList } from 'lucide-react';

// const Navbar = () => {
//   const navLinks = [
//     { path: '/admin/add-restaurant', label: 'Add Restaurant', icon: Store },
//     { path: '/admin/add-menu', label: 'Add Menu', icon: MenuSquare },
//     { path: '/admin/manage-orders', label: 'Manage Orders', icon: ClipboardList }
//   ];

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/admin" className="text-2xl font-bold text-gray-800">
//               BiteBuddy Admin
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex items-center space-x-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//               >
//                 <link.icon className="w-5 h-5 mr-2" />
//                 <span>{link.label}</span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



//updated code

import { Link } from 'react-router-dom';
import { Store, ClipboardList, List } from 'lucide-react'; // Changed icons

const Navbar = () => {
  const navLinks = [
    // This link is good
    { path: '/admin/add-restaurant', label: 'Add Restaurant', icon: Store },
    
    // I've REPLACED the broken 'Add Menu' link with this new 'Manage Restaurants' link
    // This points to the new 'RestaurantList.jsx' component
    // The stray '_' character is now removed from the line below
    { path: '/admin/restaurants', label: 'Manage Restaurants', icon: List },

    // This link is good
    { path: '/admin/manage-orders', label: 'Manage Orders', icon: ClipboardList }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/admin/restaurants" className="text-2xl font-bold text-gray-800">
              BiteBuddy Admin
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <link.icon className="w-5 h-5 mr-2" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
  _     </div>
      </div>
    </nav>
  );
};

export default Navbar;