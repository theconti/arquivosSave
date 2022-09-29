import express from "express"
import cors from "cors"
const port = 3000
const app = express();

app.use(express.json());
app.use(cors())

app.listen(port, () => {
    console.log(`server in http://localhost${port}`)
})