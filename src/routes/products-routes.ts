import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware.js";

const productsRoutes = Router()

productsRoutes.get("/:id", (request, response) => {
  const { page, limit } = request.query
  
  response.send(`Página ${page} de ${limit}`)
})

productsRoutes.post("/", myMiddleware, (request, response) => {
  const { name, price } = request.body

  // response.send(`o produto: ${name} custa R$${price}`)
  response.status(201).json({ name, price, user_id: request.user_id })
})

export { productsRoutes }