import { response } from "express";
import productManager from "../productManager.js";

export const checkProductData = async (req = Request, res = response, next) => {
    try {
        const { title, description, price, code, stock, category } = req.body;
        const newProduct = {
            title,
            description,
            price,
            code,
            stock,
            category
        } 

        const productos = await productManager.getProductos();
        // validamos que no se repita el campo de code
        const producExits = productos.find((product)=> product.code === code);
        if (producExits) return res.status(400).json({status: "Error", msg: `El producto con el codigo ${code} ya existe`});

        // verificamos que los campos sean obligatirios
        const checkData = Object.values(newProduct).includes(undefined);
        if (checkData) return res.status(400).json({status: "Error", msg: "Todoso los datos son obligatorios"});

        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({status: "Error", msg: "Error interno del servidor"});

    }
}