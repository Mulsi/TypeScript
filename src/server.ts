import express = require('express')
import { MetricsHandler } from './metrics'

let ejs = require('ejs')
const app = express()
const path = require('path')
//const metrics = require('./metrics')

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

const port: string = process.env.PORT || '8080'
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req: any, res: any) => {
  res.write('Hello world')
  res.end()
})

app.get('/hello/:Miha', (req, res) => {
  res.render('Page.ejs', {name: req.params.name})
})


app.get('/metrics.json', (req: any, res: any) => {
    MetricsHandler.get((err: Error | null, result?: any) => {
      if (err) {
        throw err
      }
      res.json(result)
    })
  })


app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})


// compajlaš z:
//1. greš z cd v pot projekta
//2. .\node_modules\.bin\tsc ali pa .\node_modules\.bin\tsconfig.json
//npm run start