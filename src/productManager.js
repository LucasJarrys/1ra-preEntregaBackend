let productos = [];

import fs from "fs";

const pathFile = "./src/data/productos.json";

// Armamos el objeto de producto

const addProducto = async (producto) => {
    await getProductos();
    const {title, description, price, thumbail, code, stock, category} = producto;
    const newProduct = {
        id: productos.length + 1,
        title,
        description,
        price,
        thumbail : thumbail || [],
        code,
        stock,
        category,
        status: true,
    };

    productos.push(newProduct);

    await fs.promises.writeFile(pathFile,JSON.stringify(productos));
    
    return producto;
};

// FUNCION PARA AGREGAR PRODUTOS EN UN JSON

const getProductos = async (limit) => {
    const productosJson = await fs.promises.readFile(pathFile, "utf-8");
    const productosParse = JSON.parse(productosJson);
    productos = productosParse || [];

    if (!limit) return productos;

    return productos.slice(0, limit);
}

