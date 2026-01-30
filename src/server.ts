import express from "express"
import { myMiddleware } from "./middlewares/my-middleware.js"

const PORT = 3333

const app = express()
// Faz o Express esperar que os dados da requisição sejam do tipo JSON.
app.use(express.json())

// Aplicar o middleware para todas as rotas. (MIDDLEWARE GLOBAL)
// app.use(myMiddleware)

// Middleware local em uma rota especifica 
app.get("/products", (request, response) => {
  const { page, limit } = request.query
  
  response.send(`Página ${page} de ${limit}`)
})

app.post("/products", myMiddleware, (request, response) => {
  const { name, price } = request.body

  // response.send(`o produto: ${name} custa R$${price}`)
  response.status(201).json({ name, price, user_id: request.user_id })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))