// import RestaurantDetails from "../models/menudata.js";
// import Restaurant from "../models/restaurentdata.js";
// import imagekit from "../config/imagekit.js";

// export const createMenu = async (req, res) => {
//   try {
//     const restaurantId = req.params.restaurantId;
//     const { name, description, price, isVeg, category } = req.body;

//     // Validate restaurant exists
//     const restaurant = await Restaurant.findById(restaurantId);
//     if (!restaurant) {
//       return res.status(404).json({
//         success: false,
//         message: "Restaurant not found"
//       });
//     }

//     // Handle image upload
//     if (!req.files || !req.files.image) {
//       return res.status(400).json({
//         success: false,
//         message: "Please upload an image"
//       });
//     }

//     const image = req.files.image;
//     const imageUpload = await imagekit.upload({
//       file: image.data.toString('base64'),
//       fileName: `menu-${Date.now()}-${image.name}`,
//       folder: "food-delivery/menu"
//     });

//     // Find or create restaurant menu
//     let restaurantMenu = await RestaurantDetails.findOne({ restaurant: restaurantId });
    
//     if (!restaurantMenu) {
//       restaurantMenu = new RestaurantDetails({
//         restaurant: restaurantId,
//         items: []
//       });
//     }

//     // Add menu item
//     restaurantMenu.items.push({
//       name,
//       description,
//       price: Number(price),
//       image: [imageUpload.url],
//       isVeg: Boolean(isVeg),
//       category
//     });

//     await restaurantMenu.save();

//     res.status(201).json({
//       success: true,
//       message: "Menu item added successfully",
//       data: restaurantMenu
//     });

//   } catch (error) {
//     console.error("Error creating menu item:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// export const getMenu = async (req, res) => {
//   try {
//     const { restaurantId } = req.params;
//     const menu = await RestaurantDetails.findOne({ restaurant: restaurantId });
    
//     if (!menu) {
//       return res.status(200).json({
//         success: true,
//         data: { items: [] }
//       });
//     }

//     res.json({
//       success: true,
//       data: menu
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };


import RestaurantDetails from "../models/menudata.js";
import Restaurant from "../models/restaurentdata.js";
import imagekit from "../config/imagekit.js";

// --- YOUR EXISTING FUNCTIONS ---
export const createMenu = async (req, res) => {
  // ... (your createMenu code) ...
  // Make sure to use 'image: imageUpload.url' (not an array)
};

export const getMenu = async (req, res) => {
  // ... (your getMenu code) ...
};


// --- ADD THESE NEW FUNCTIONS ---

// --- NEW updateMenu Function ---
export const updateMenu = async (req, res) => {
  try {
    const { id } = req.params; // This is the menu ITEM's _id
    const { name, description, price, isVeg, category } = req.body;

    const restaurantMenu = await RestaurantDetails.findOne({ "items._id": id });
    if (!restaurantMenu) {
      return res.status(404).json({ success: false, message: "Menu item not found" });
    }

    const item = restaurantMenu.items.id(id);

    item.name = name || item.name;
    item.description = description || item.description;
    item.price = Number(price) || item.price;
    item.isVeg = Boolean(isVeg);
    item.category = category || item.category;

    if (req.files && req.files.image) {
      const image = req.files.image;
      const imageUpload = await imagekit.upload({
        file: image.data.toString('base64'),
        fileName: `menu-update-${Date.now()}-${image.name}`,
        folder: "food-delivery/menu"
      });
      item.image = imageUpload.url;
    }

    await restaurantMenu.save();

    res.status(200).json({
      success: true,
      message: "Menu item updated successfully",
      data: item
    });
  } catch (error) {
    console.error("Error updating menu item:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- NEW deleteMenu Function ---
export const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params; // This is the menu ITEM's _id

    const restaurantMenu = await RestaurantDetails.findOne({ "items._id": id });
    if (!restaurantMenu) {
      return res.status(404).json({ success: false, message: "Menu item not found" });
    }

    restaurantMenu.items.pull({ _id: id });

    await restaurantMenu.save();

    res.status(200).json({
      success: true,
      message: "Menu item deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting menu item:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
