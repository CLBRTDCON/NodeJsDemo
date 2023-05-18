import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Node Azure" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Acerca De" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contacto" });
});

export default router;
