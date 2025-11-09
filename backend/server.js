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

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cookieParser());

// ✅ Hardcoded and dynamic origins
const hardcodedOrigins = [
  "http://localhost:5173",
  "http://localhost:4000",
  "http://localhost:5174",
  "https://foodorderingfrontend-4dyf.onrender.com", // ✅ Render frontend
];

// ✅ Add any extra origins from .env (comma-separated)
const dynamicOriginsString = process.env.FRONTEND_URL;
const dynamicOrigins = dynamicOriginsString ? dynamicOriginsString.split(",") : [];

const allowedOrigins = [...hardcodedOrigins, ...dynamicOrigins];

// ✅ Final CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked CORS for origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // ✅ Important for cookies
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  })
);

// ✅ Connect to MongoDB
connectdb();

// ✅ Routes
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>API Status</title>
      </head>
      <body>
        <h1>API is working 🚀</h1>
        <p>Welcome to BiteBuddy Backend - Everything is running smoothly.</p>
      </body>
    </html>
  `);
});

// ✅ Server listen with fallback
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));

