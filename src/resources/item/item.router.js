import { Router } from 'express'
import {
  allItems,
  oneItem,
  createItem,
  updateItem,
  deleteItem
} from './item.controllers'

const router = Router()
// /api/item
router
  .route('/')
  .get(allItems)
  .post(createItem)

// /api/item/:id
router
  .route('/:id')
  .put(updateItem)
  .delete(deleteItem)
  .get(oneItem)

export default router
