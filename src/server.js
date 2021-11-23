import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const router = express.Router() // In case you need Sub Routes, you should create a router (In the case you don't need them, you are ok with the default that comes in <<app>>)
app.use('/other', router)

app.disable('x-powered-by')

// MIDDLEWARES their intent is to mutate and pass on (next) not to respond to the request (but the can do it if needed)

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

/* Custom middleware */

const myLog = (req, res, next) => {
  console.log('logging')
  next()
}

// app.use(myLog) //will execute the middleware before ALL my controllers

// CONTROLLERS  Their intent is to respond to the request.

app.get('/data', myLog, (req, res) => {
  res.send({ data: ['a', 'b', 'c'] })
})
/* 
app.get('/data', myLog, (req, res) => { //Here myLog executes before the controler. 
  res.send({ data: ['a', 'b', 'c'] })
})
 */
/* 
app.get('/data', [middleware1, middleware2, middleware3], (req, res) => { //Executes in order (secuentially not asyncronously) the middlewares of the array before the controller. 
  res.send({ data: 'Monchetas })
})
 */
app.post('/data', (req, res) => {
  console.log(req.body)
  res.send({ ok: true })
})

/*  this sub route <<router.get>> works thanks to -> app.use('/other', router) (http://localhost:3000/other/data) and has no conflicts with the principal app.get */
router.get('/data', (req, res) => {
  res.send({ message: 'Hi from the sub route: /other' })
})

/* 
The different ways you can match routes:
an exact match, a parameter match, a regex match, a glob match.
*/
/* 
  REST (Representational State Transfer) with CRUD (Create Read Update Destroy)
  uses POST GET PUT DELETE as corresponding verbs in the routes
*/

export const start = () => {
  app.listen(3000, () => {
    console.log('server on 3000')
  })
}
