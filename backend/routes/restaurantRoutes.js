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

// The BASE URL for this router is /api/restaurants
// Fix 1: Use the root route ('/') for creation, matching the frontend's expected POST /api/restaurants
router.post('/', createRestaurant);

// Fix 2: Simplify GET routes (assuming no other list route is needed)
router.get('/', getRestaurants); // GET /api/restaurants/
router.get('/:id', getRestaurantById); // GET /api/restaurants/:id

// CRUD Routes for Updates/Deletes
router.put('/:id', updateRestaurant); // PUT /api/restaurants/:id
router.delete('/:id', deleteRestaurant); // DELETE /api/restaurants/:id

export default router;
