import { todoGetAll } from "./todoGetAll"

import { Todo } from "../../utils/Todo"

export async function todoGetById(id: Todo["id"]) {
  try {
    const todos = await todoGetAll()

    const todo = todos.find((todo) => todo.id === id)

    return todo
  } catch (error) {
    throw error
  }
}
