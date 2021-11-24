import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'

export default crudControllers(Item)

/* If you wanto to override any generic controller for the model here imported
  export default {
  ...crudControllers(Item),
  getOne() {new code to override the generic controller}
} */
