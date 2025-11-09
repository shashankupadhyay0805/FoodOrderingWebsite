// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import bodyParser from "body-parser";
// import fileUpload from "express-fileupload";
// import connectdb from "./config/mongo.js";
// import restaurantRoutes from "./routes/restaurantRoutes.js";
// import menuRoutes from "./routes/menuRoutes.js";
// import cartRoutes from "./routes/cartRoutes.js";
// import paymentRoutes from "./routes/paymentRoutes.js";
// import cookieParser from "cookie-parser";
// import authRoutes from "./routes/authRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";

// const app = express();
// app.use(bodyParser.json());
// app.use(fileUpload());

// dotenv.config();

// // Allow CORS from specific origins
// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "http://localhost:4000",
//     "http://localhost:5174", 
//     "https://full-stack-online-food-ordering-system-frontend.vercel.app",
//     "https://full-stack-online-food-ordering-system-backend.vercel.app",
//     "https://bite-buddy-food.vercel.app"
//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], 
//   allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
//   exposedHeaders: ['Set-Cookie']
// }));
// app.use(cookieParser());

// // Connect to MongoDB
// connectdb();

// const port = process.env.PORT;

// // Routes
// app.use("/api/restaurants", restaurantRoutes);
// app.use("/api/menus", menuRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/payment", paymentRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/orders", orderRoutes);

// app.get("/", (req, res) => {
//   res.send(`
//       <html>
//         <head>
//           <title>API Status</title>
//         </head>
//         <body>
//           <h1>API is working</h1>
//           <p>Welcome to the Food delivery website. Everything is running smoothly.</p>
//         </body>
//       </html>
//     `);
// });

// app.listen(port, () => console.log(`Server running on port ${port}`));


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import connectdb from "./config/mongo.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(fileUpload());

dotenv.config();

// --- START: MODIFIED CORS LOGIC ---

// 1. Define hardcoded origins (local dev URLs)
const hardcodedOrigins = [
    "http://localhost:5173",
    "http://localhost:4000",
    "http://localhost:5174", 
    "https://foodorderingfrontend-4dyf.onrender.com",
];

// 2. Get the environment variable string (e.g., "url1,url2")
const dynamicOriginsString = process.env.FRONTEND_URL;

// 3. Create an array of dynamic URLs, ensuring the variable is not empty
const dynamicOrigins = dynamicOriginsString ? dynamicOriginsString.split(',') : [];

// 4. Combine hardcoded and dynamic URLs into the final allowed list
const allowedOrigins = [...hardcodedOrigins, ...dynamicOrigins];

Allow CORS from specific origins
app.use(cors({
    // Use the combined list of origins
    origin: allowedOrigins,
    
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], 
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['Set-Cookie']
}));
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       const allowedOrigins = [
//         'http://localhost:5173',
//         'https://foodorderingfrontend-4dyf.onrender.com', // ✅ your frontend Render URL
//       ];

//       // Allow requests with no origin (like mobile apps or curl)
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true, // ✅ required for cookies
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//   })
// );


// --- END: MODIFIED CORS LOGIC ---

app.use(cookieParser());

// Connect to MongoDB
connectdb();

const port = process.env.PORT;

// Routes
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
    res.send(`
        <html>
          <head>
            <title>API Status</title>
          </head>
          <body>
            <h1>API is working</h1>
            <p>Welcome to the Food delivery website. Everything is running smoothly.</p>
          </body>
        </html>
    `);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
