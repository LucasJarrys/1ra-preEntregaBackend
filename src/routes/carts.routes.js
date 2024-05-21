import { Router } from "express";
import cartManager from "../cartManager.js";
import productManager from "../productManager.js";

const router = Router();

router.post("/", async (req, res) => {
    try {
        
        const carrito = await cartManager.createCarrito();

        res.status(201).json({status: "success", carrito});

    } catch (error) {
        console.log(error);
        res.status(500).json({status: "Error", msg: "Error interno del servidor"});
    }
})

router.get("/:cid", async (req, res) => {
    try {
        const {cid} = req.params
        const carrito = await cartManager.getCarritoById(Number(cid));
        if (!carrito) return res.status(404).json({ status: "Error", msg: "Carrito no encontrado" });

        res.status(200).json({status: "success", carrito});

    } catch (error) {
        console.log(error);
        res.status(500).json({status: "Error", msg: "Error interno del servidor"});
    }
})

router.post("/", async (req, res) => {
    try {
        
        const carrito = await cartManager.createCarrito();

        res.status(201).json({status: "success", carrito});

    } catch (error) {
        console.log(error);
        res.status(500).json({status: "Error", msg: "Error interno del servidor"});
    }
})


export default router;