import nc from 'next-connect'
import {contributions} from '../../../__fake-api__/data'
import { v4 as uuid } from 'uuid';
const handler = nc()
  .get((req, res) => {
    res.json({data: contributions})
  })
  .post((req, res) => {
    const id = uuid() 
    const contribution = {...req.body, id}
    contributions.push(contribution)
    res.json({data: contributions})
  })
export default handler