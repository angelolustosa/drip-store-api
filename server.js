
import './src/db/dbConnect.js'
import app from './src/app.js'

const HOST = 'localhost'
const PORT = 5000

app.get('/', (req, res) => {
  res.send('Servidor no Ar!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})