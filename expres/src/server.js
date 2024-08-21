import app from "./app.js"
import dotenv from "dotenv"

dotenv.config()
const port = process.env.PORT || 4001

app.listen(port, (res) => {
  console.log(`Servidor rodando na perta: http://localhost:${port}`)
})