// import express from "express";
// import { createMenu, getMenu } from "../controllers/menudatacontroller.js";

// const router = express.Router();

// router.post('/restaurant/:restaurantId', createMenu);
// router.get('/restaurant/:restaurantId', getMenu);

// export default router;

import express from "express";
import { 
    createMenu, 
    getMenu,
    updateMenu,  // <-- IMPORT NEW
    deleteMenu   // <-- IMPORT NEW
} from "../controllers/menudatacontroller.js";

const router = express.Router();

// Routes for the whole restaurant menu
router.post('/restaurant/:restaurantId', createMenu);
router.get('/restaurant/:restaurantId', getMenu);

// --- NEW ROUTES ---
// Routes for a SINGLE menu item by its own _id
router.put('/:id', updateMenu);
router.delete('/:id', deleteMenu);

export default router;
