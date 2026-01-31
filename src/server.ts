import express, { Request, Response, NextFunction } from "express"

import { routes } from "./routes/index.js"
import { AppError } from "./utils/AppError.js"

const PORT = 3333

const app = express()
app.use(express.json()) // Faz o Express esperar que os dados da requisição sejam do tipo JSON. 

app.use(routes)


/**
 * 400(Bad Request): Erro do cliente.
 * 500(Internal Server Erro): Erro interno do servidor. 
 */
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message})
  }
  response.status(500).json({ message: error.message })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))