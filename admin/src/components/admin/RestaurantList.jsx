// src/components/admin/RestaurantList.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PlusCircle, Utensils } from 'lucide-react';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/restaurants/list`);
        const data = await response.json();

        if (data.success) {
          setRestaurants(data.data);
        } else {
          throw new Error(data.message || 'Failed to fetch restaurants');
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // *** I have removed the complicated getImageUrl function ***

  if (loading) {
    return <div className="min-h-screen bg-gray-50 p-8 text-center">Loading restaurants...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Restaurants</h1>
          <Link
            to="/admin/add-restaurant"
            className="inline-flex items-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-md font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <PlusCircle size={20} />
            Add New Restaurant
          </Link>
        </div>

        {restaurants.length === 0 ? (
          <div className="text-center bg-white p-8 rounded-lg shadow">
            <p className="text-gray-600">You haven't added any restaurants yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {restaurants.map(restaurant => {
              // *** THIS IS THE NEW FIX ***
              // We read the first item from the 'image' (singular) array.
              // The '?' stops it from crashing if 'image' is missing.
              const imageUrl = restaurant.image?.[0]; 

              return (
                <div key={restaurant._id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      // Use the imageUrl or the placeholder
                      src={imageUrl || 'https://placehold.co/100x100/purple/white?text=No+Image'}
                      alt={restaurant.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">{restaurant.name}</h2>
                      <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
                    </div>
                  </div>
                  
                  <Link
                    to={`/admin/add-menu/${restaurant._id}`}
                    className="inline-flex items-center gap-2 bg-green-600 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <Utensils size={16} />
                    Add Menu
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;