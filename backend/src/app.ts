import express from "express";
import helloRoutes from "./routes/helloRoutes";

const app = express();

app.use(express.json());
app.use('/api', helloRoutes);

export default app;