import AsyncStorage from "@react-native-async-storage/async-storage"

import { todoGetById } from "./todoGetById"
import { todoGetAll } from "./todoGetAll"
import { TODO_COLLECTION } from "../storageConfig"

import { Todo } from "../../utils/Todo"

export async function todoToggleDone(id: Todo["id"]) {
  try {
    const todo = await todoGetById(id)

    const todos = await todoGetAll()

    const updatedTodos = todos
      .map((item) =>
        item.id === todo?.id ? { ...item, done: !item.done } : item
      )
      .sort((a, b) => Number(a.done) - Number(b.done))

    const storage = JSON.stringify(updatedTodos)
    
    await AsyncStorage.setItem(TODO_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
