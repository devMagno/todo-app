import AsyncStorage from "@react-native-async-storage/async-storage"

import { TODO_COLLECTION } from "../storageConfig"

import { Todo } from "../../utils/Todo"

export async function todoGetAll() {
  const storage = await AsyncStorage.getItem(TODO_COLLECTION)

  const todos: Todo[] = storage ? JSON.parse(storage) : []

  return todos
}
