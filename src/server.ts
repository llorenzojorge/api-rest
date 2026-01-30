import express from "express"
import { routes } from "./routes/index.js"

const PORT = 3333

const app = express()
app.use(express.json()) // Faz o Express esperar que os dados da requisição sejam do tipo JSON. 

app.use(routes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))