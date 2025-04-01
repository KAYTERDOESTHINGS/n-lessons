import express from "express";
import auth from "../middlewares/authentication.js";
import {
  createLesson,
  updateLesson,
  deleteLesson,
  getLesson,
  getListLessons,
} from "../controllers/lessonController.js";

const router = express.Router();

router.post("/create", auth(), createLesson);
router.put("/update", auth(), updateLesson);
router.get("/get/:id", auth(), getLesson);
router.delete("/delete/:id", auth(), deleteLesson);
router.get("/list", auth(), getListLessons);

export { router as lessonRouter };
