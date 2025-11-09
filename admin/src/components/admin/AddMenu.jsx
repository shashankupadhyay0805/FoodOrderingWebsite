// // src/components/admin/AddMenu.jsx
// import React, { useState } from 'react'
// import { useEffect } from 'react';
// import { Upload, X } from 'lucide-react';
// import { toast } from 'react-toastify';
// import { useParams } from 'react-router-dom';

// const AddMenu = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     image: null,
//     isVeg: false
//   });
//   const [loading, setLoading] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [restaurant, setRestaurant] = useState(null);
//   const { restaurantId } = useParams();

// useEffect(() => {
//     // Fetch restaurant details
//     const fetchRestaurant = async () => {
//       try {
//         // --- FIX: Removed "/list" from this URL ---
//         const response = await fetch(`${import.meta.env.VITE_API_URL}/api/restaurants/${restaurantId}`);
        
//         const data = await response.json();
//         if (data.success) {
//           setRestaurant(data.data);
//         }
//       } catch (error) {
//         toast.error('Failed to fetch restaurant details');
//       }
//     };

//     // Don't forget to call the function!
//     if (restaurantId) {
//         fetchRestaurant();
//     }

// }, [restaurantId]); // Add restaurantId as a dependency

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData(prev => ({
//         ...prev,
//         image: file
//       }));
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('description', formData.description);
//       formDataToSend.append('price', formData.price);
//       formDataToSend.append('isVeg', formData.isVeg);
//       if (formData.image) {
//         formDataToSend.append('image', formData.image);
//       }

//       const response = await fetch(`${import.meta.env.VITE_API_URL}/api/menus/restaurant/${restaurantId}`, {
//         method: 'POST',
//         body: formDataToSend
//       });

//       const data = await response.json();

//       if (data.success) {
//         toast.success('Menu item added successfully!');
//         // Reset form
//         setFormData({
//           name: '',
//           description: '',
//           price: '',
//           image: null,
//           isVeg: false
//         });
//         setImagePreview(null);
//       } else {
//         throw new Error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message || 'Failed to add menu item');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Add Menu Item</h1>
//           {restaurant && (
//             <p className="mt-2 text-gray-600">Adding menu item to: {restaurant.name}</p>
//           )}
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
//           {/* Item Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Item Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               rows={3}
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Price (₹)
//             </label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               required
//               min="0"
//               className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
//             />
//           </div>

//           {/* Is Vegetarian */}
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               name="isVeg"
//               checked={formData.isVeg}
//               onChange={handleChange}
//               className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//             />
//             <label className="ml-2 block text-sm text-gray-700">
//               Vegetarian Item
//             </label>
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Item Image
//             </label>
//             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//               <div className="space-y-1 text-center">
//                 <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                 <div className="flex text-sm text-gray-600">
//                   <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
//                     <span>Upload a file</span>
//                     <input
//                       type="file"
//                       name="image"
//                       onChange={handleImageChange}
//                       accept="image/*"
//                       className="sr-only"
//                       required
//                     />
//                   </label>
//                 </div>
//                 <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
//               </div>
//             </div>
//             {imagePreview && (
//               <div className="mt-2">
//                 <img
//                   src={imagePreview}
//                   alt="Preview"
//                   className="h-32 w-32 object-cover rounded"
//                 />
//               </div>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
//               loading ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//           >
//             {loading ? 'Adding Menu Item...' : 'Add Menu Item'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddMenu;

import { useState, useEffect } from 'react';
import { Upload, X, Edit, Trash2, PlusCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const AddMenu = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
    isVeg: false
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const { restaurantId } = useParams();

  // --- NEW STATE ---
  const [menuItems, setMenuItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null); // Will store the ID of item being edited

  // --- NEW: Function to fetch all menu items for this restaurant ---
 const fetchMenuItems = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/menus/restaurant/${restaurantId}`);
        const data = await response.json();
        if (data.success) {
          setMenuItems(data.data.items); // <-- THIS IS THE FIX
        } else {
        toast.error(data.message || 'Failed to fetch menu items');
      }
    } catch (error) {
      toast.error('Failed to fetch menu items');
    }
  };

  // --- UPDATED: useEffect to fetch both restaurant AND menu items ---
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        // --- FIX: Remember to remove '/list' from this URL ---
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/restaurants/${restaurantId}`);
        const data = await response.json();
        if (data.success) {
          setRestaurant(data.data);
        }
      } catch (error) {
        toast.error('Failed to fetch restaurant details');
      }
    };

    if (restaurantId) {
      fetchRestaurant();
      fetchMenuItems(); // Also fetch the menu items
    }
  }, [restaurantId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // --- NEW: Function to reset the form ---
  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      image: null,
      isVeg: false
    });
    setImagePreview(null);
    setEditingItem(null); // Exit editing mode
  };

  // --- UPDATED: handleSubmit to handle BOTH Create and Update ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('isVeg', formData.isVeg);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    // Determine URL and Method (Create vs Update)
    const isEditing = editingItem !== null;
    const url = isEditing
      ? `${import.meta.env.VITE_API_URL}/api/menus/${editingItem}` // Update URL
      : `${import.meta.env.VITE_API_URL}/api/menus/restaurant/${restaurantId}`; // Create URL
    
    const method = isEditing ? 'PUT' : 'POST'; // PUT to update, POST to create

    try {
      const response = await fetch(url, {
        method: method,
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast.success(isEditing ? 'Menu item updated!' : 'Menu item added!');
        resetForm();
        fetchMenuItems(); // Refresh the list
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  // --- NEW: Function to handle clicking the "Edit" button ---
  const handleEditClick = (item) => {
    setEditingItem(item._id); // Set editing mode
    // Load item's data into the form
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price,
      isVeg: item.isVeg,
      image: null // Don't re-load the image file, just the preview
    });
    setImagePreview(item.image); // Show existing image preview
    window.scrollTo(0, 0); // Scroll to top to see the form
  };

  // --- NEW: Function to handle clicking the "Delete" button ---
  const handleDelete = async (menuItemId) => {
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/menus/${menuItemId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Menu item deleted!');
        fetchMenuItems(); // Refresh the list
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete item');
    }
  };

  // --- JSX IS UPDATED BELOW ---
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* --- FORM SECTION --- */}
        <div className="mb-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
            </h1>
            {restaurant && (
              <p className="mt-2 text-gray-600">
                For: {restaurant.name}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
            {/* Item Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Item Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
s             />
            </div>
            {/* ... (rest of your form: Description, Price, IsVeg) ... */}
            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Is Vegetarian */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isVeg"
                checked={formData.isVeg}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">Vegetarian Item</label>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Item Image</label>
            {/* ... (rest of your image upload JSX) ... */}
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                      accept="image/*"
                      className="sr-only"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>
            {imagePreview && (
              <div className="mt-2 relative w-32">
                <img src={imagePreview} alt="Preview" className="h-32 w-32 object-cover rounded" />
                <button 
                    type="button" 
                    onClick={() => {
                        setImagePreview(null);
                        setFormData(prev => ({ ...prev, image: null }));
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                >
                    <X size={16} />
                </button>
              </div>
            )}
          </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className={`flex-1 flex justify-center items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <PlusCircle size={20} />
                {loading ? (isEditing ? 'Updating...' : 'Adding...') : (isEditing ? 'Update Item' : 'Add Item')}
              </button>
              {editingItem && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* --- NEW: EXISTING MENU ITEMS LIST --- */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Existing Menu Items</h2>
          {menuItems.length === 0 ? (
            <p className="text-gray-500">No menu items found for this restaurant.</p>
          ) : (
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item._id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.image || 'https://placehold.co/100x100/green/white?text=No+Image'} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-md"
                    />
          _         <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price}</p>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${item.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {item.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>
                  </div>
        _         
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEditClick(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
                      title="Edit"
                    >
        s             <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                      title="Delete"
            s       >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AddMenu;
