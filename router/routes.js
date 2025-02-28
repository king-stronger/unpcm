import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
    res.render("layout", { 
        page: "index",
        pageTitle: "UNCMP - Accueil"
    });
});

router.get("/about", (req, res, next) => {
    res.render("layout", { 
        page: "about",
        pageTitle: "UNCMP -A propos"
    });
});

router.get("/blog", (req, res, next) => {
    res.render("layout", { 
        page: "blog",
        pageTitle: "UNCMP - Blog"
    });
});

router.get("/membership", (req, res, next) => {
    res.render("layout", { 
        page: "membership",
        pageTitle: "UNCMP -A propos"
    });
});


export default router;