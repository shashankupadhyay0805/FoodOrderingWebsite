// import express from 'express';
// import {
//   createRestaurant,
//   getRestaurants,
//   getRestaurantById,
//   updateRestaurant,
//   deleteRestaurant
// } from '../controllers/restaurantController.js';

// const router = express.Router();

// // CRUD Routes
// router.post('/', createRestaurant);
// router.get('/list', getRestaurants);
// router.get('/list/:id', getRestaurantById);
// router.put('/update/:id', updateRestaurant);
// router.delete('/delete/:id', deleteRestaurant);

// export default router;
import express from 'express';
import {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant
} from '../controllers/restaurantController.js';

const router = express.Router();

// The base URL for this router is /api/restaurants (defined in server.js)

// 1. Specific route for GET /api/restaurants/list
// This MUST be defined BEFORE the dynamic '/:id' route.
// This route now matches your frontend's API call.
router.get('/list', getRestaurants);

// 2. Dynamic route for getting one restaurant by ID
// This handles GET /api/restaurants/:id (e.g., /api/restaurants/60c72b...)
router.get('/:id', getRestaurantById);

// 3. Other CRUD routes
router.post('/', createRestaurant); // POST /api/restaurants
router.put('/:id', updateRestaurant); // PUT /api/restaurants/:id
router.delete('/:id', deleteRestaurant); // DELETE /api/restaurants/:id

export default router;
