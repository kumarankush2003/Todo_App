const zod = require('zod')

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})
const updateTodo = createTodo.object({
    id : zod.string(),
})
module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}
