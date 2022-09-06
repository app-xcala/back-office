import nc from 'next-connect';
import cors from 'cors'


const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send('Hola Medellín JS')
  })
  .post((req, res) => {
    res.json(req.body)
  })
  .put(async (req, res) => {
    res.end('Hola Amigos')
  })
  
export default handler;