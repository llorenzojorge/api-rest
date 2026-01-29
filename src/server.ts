import express from "express"

const PORT = 3333

const app = express()
// Faz o Express esperar que os dados da requisição sejam do tipo JSON.
app.use(express.json())

// Método GET.
app.get("/products", (request, response) => {
  const { page, limit } = request.query
  
  response.send(`Página ${page} de ${limit}`)
})

// Método POST.
app.post("/products", (request, response) => {
  const { name, price } = request.body
  response.send(`o produto: ${name} custa R$${price}`)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))