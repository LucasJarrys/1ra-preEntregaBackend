import fs from "fs"


let carritos = [];
const pathFile = "./src/data/carrito.json";

// LEEMOS LOS CARRITOS COMO UN JSON

const getCarrito = async () => {
    const carritosJson = await fs.promises.readFile(pathFile, "utf-8");
    const carritoPars = JSON.parse(carritosJson);
    carritos = carritoPars || [];

};

// CREAMOS LOS CARRITOS 

const createCarrito = async () => {
    await getCarrito();
    const newCart = {
        id: carritos.length +1,
        productos: [],
    };

    carritos.push (newCart);

    await fs.promises.writeFile(pathFile, JSON.stringify(carritos));

    return newCart;

};

const getCarritoById = async (cid) => {
    await getCarrito();
    const carrito = carritos.find((cart)=> cart.id === cid);
    return carrito; 
};


// AGREGAR PRODUCTOS AL CARRITO 

const addProducToCart = async (cid, pid) => {
    await getCarrito();
    const producto = {
        producto: pid,
        quantity: 1,
    };

    const index = carritos.findIndex((cart)=> cart.id === cid);
    carritos[index].productos.push(producto);

    await fs.promises.writeFile(pathFile, JSON.stringify(carritos));
    return carritos[index];
};


export default {
    getCarrito,
    createCarrito,
    getCarritoById,
    addProducToCart,
};