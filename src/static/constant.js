import "dotenv/config.js";

const DATE_FORMAT = "DD/MM/YYYY HH:mm:ss";
const TIMEZONE = "Asia/Ho_Chi_Minh";

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "X-API-Key", "X-tenant"],
  exposedHeaders: ["Content-Disposition"],
};

const ENV = {
  SERVER_PORT: process.env.PORT,
  X_API_KEY: process.env.X_API_KEY,
  APP_URL: process.env.URL,
  UPLOAD_DIR: process.env.UPLOAD_DIR,
  MONGODB_URI: process.env.MONGODB_URI,
  DB_NAME: process.env.DB_NAME,
};

const MIME_TYPES = {
  // Images
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".bmp": "image/bmp",

  // Videos
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".ogg": "video/ogg",
  ".m3u8": "application/x-mpegURL",
  ".ts": "video/mp2t",

  // Soundtracks
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",

  // Documents
  ".pdf": "application/pdf",
  ".txt": "text/plain",
  ".csv": "text/csv",
  ".json": "application/json",
  ".xml": "application/xml",
  ".md": "text/markdown",
  ".html": "text/html",
};

export { corsOptions, TIMEZONE, DATE_FORMAT, ENV, MIME_TYPES };
