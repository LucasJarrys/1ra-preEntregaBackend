let productos = [];

import fs from "fs";

const pathFile = "./src/data/products.json";

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

const getProductos = async (limit) => {
    
}

