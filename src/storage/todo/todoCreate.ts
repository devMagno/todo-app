import AsyncStorage from "@react-native-async-storage/async-storage"

import { TODO_COLLECTION } from "../storageConfig"

import { todoGetAll } from "./todoGetAll"

import { Todo } from "../../utils/Todo"
import { AppError } from "../../utils/AppError"

export async function todoCreate(newTodo: Todo) {
  try {
    const storedTodos = await todoGetAll()

    const todoAlreadyExists = storedTodos.includes(newTodo)

    if (todoAlreadyExists)
      throw new AppError("Já existe uma tarefa cadastrado com esse nome.")

    const storage = JSON.stringify([newTodo, ...storedTodos])

    await AsyncStorage.setItem(TODO_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
