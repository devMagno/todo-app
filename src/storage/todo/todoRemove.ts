import AsyncStorage from "@react-native-async-storage/async-storage"

import { todoGetAll } from "./todoGetAll"
import { TODO_COLLECTION } from "../storageConfig"

import { Todo } from "../../utils/Todo"

export async function todoRemove(id: Todo["id"]) {
  try {
    const todos = await todoGetAll()

    const updatedTodos = todos.filter((todo) => todo.id !== id)
    
    const storage = JSON.stringify(updatedTodos)

    await AsyncStorage.setItem(TODO_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
