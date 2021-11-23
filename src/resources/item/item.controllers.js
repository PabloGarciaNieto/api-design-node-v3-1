export const allItems = (req, res) => {
  res.send({ message: 'These are all the items' })
}

export const oneItem = (req, res) => {
  res.send({ message: 'This is an item' })
}

export const createItem = (req, res) => {
  res.send({ message: 'Item created' })
}

export const updateItem = (req, res) => {
  res.send({ message: 'Item updated' })
}

export const deleteItem = (req, res) => {
  res.send({ message: 'Item deleted' })
}

export default { allItems, oneItem, createItem, updateItem, deleteItem }
