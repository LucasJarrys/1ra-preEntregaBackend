import express from "express"
// import routes from "./routes/"

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// app.use("/api", routes);

app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
})