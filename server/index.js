import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { MongoClient, ServerApiVersion } from "mongodb";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";

/* Config */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
console.log("hello")

/* Routes */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);


/* mogoose */
const uri = "mongodb+srv://jadalimamad:1234@cluster0.qgruwit.mongodb.net/?retryWrites=true&w=majority";
const PORT = 1337 || 9000;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(async () => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        /*await mongoose.connection.db.dropDatabase();
        KPI.insertMany(kpis);
        Product.insertMany(products);
        Transaction.insertMany(transactions);*/
    })
    .catch((error) => console.error(`MongoDB Connection Error: ${error}`));
