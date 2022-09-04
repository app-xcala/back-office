import nc from 'next-connect'
import {contributions} from '../../../__fake-api__/data'

const getcomment = id => contributions.find(n => n.id === id)

const handler = nc()
  .get((req, res) => {
    const contribution = getcomment(req.query.id)

    if (!contribution) {
      res.status(404)
      res.end()
      return
    }
    res.json({data: contribution})
  })
  .patch((req, res) => {
    const contribution = getcomment(req.query.id)
    if (!contribution) {
      res.status(404)
      res.end()
      return
    }
    const i = contributions.findIndex(n => n.id === req.query.id)
    const updated = {...contribution, ...req.body}
    contributions[i] = updated
    res.json({data: updated})
  })
  .delete((req, res) => {
    const contribution = getcomment(req.query.id)
    if (!contribution) {
      res.status(404)
      res.end()
      return
    }
    const i = contributions.findIndex(n => n.id === req.query.id)
    contributions.splice(i, 1)
    res.json({data: req.query.id})
  })
  

export default handler