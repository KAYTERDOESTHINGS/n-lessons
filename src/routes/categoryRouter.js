import express from "express";
import auth from "../middlewares/authentication.js";
import {
  createCategory,
  deleteCategory,
  getCategory,
  getListCategories,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/create", auth(), createCategory);
router.put("/update", auth(), updateCategory);
router.get("/get/:id", auth(), getCategory);
router.delete("/delete/:id", auth(), deleteCategory);
router.get("/list", auth(), getListCategories);

export { router as categoryRouter };
