import express from "express";
import cors from "cors";
import { swaggerDocs, swaggerUi } from "./config/swaggerConfig.js";
import { corsOptions, ENV } from "./static/constant.js";
import { createServer } from "http";
import { startAllJobs } from "./utils/cron.js";
import { mediaRouter } from "./routes/mediaRouter.js";
import { categoryRouter } from "./routes/categoryRouter.js";
import { lessonRouter } from "./routes/lessonRouter.js";
import dbConfig from "./config/dbConfig.js";

const app = express();
const httpServer = createServer(app);

app.use(cors(corsOptions));
app.use(express.json({ limit: "1024mb" }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/v1/media", mediaRouter);
app.use("/v1/category", categoryRouter);
app.use("/v1/lesson", lessonRouter);

startAllJobs();

const PORT = ENV.SERVER_PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
dbConfig();
