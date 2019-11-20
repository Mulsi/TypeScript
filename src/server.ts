import express = require('express')
import { MetricsHandler } from './metrics'


const app = express()
const port: string = process.env.PORT || '8080'


app.get('/', (req: any, res: any) => {
  res.write('Hello world')
  res.end()
})

app.get('/hello/:Miha', (req, res) => {
  res.render('hello.ejs', {name: req.params.name})
})

app.get('/hello', (req, res) => {
  res.write('Pali miško')
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
// 1. greš z cd v pot projekta
//2. .\node_modules\.bin\tsc ali pa .\node_modules\.bin\tsconfig.json
//npm run start