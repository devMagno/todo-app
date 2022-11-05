import { useState } from "react"
import { Text, View } from "react-native"

import { Form } from "../../components/Form"

import { styles } from "./styles"

import { Todo } from "../../types/Todo"

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAddTodo(todo: string) {
    const newTodo: Todo = {
      id: String(new Date().getTime()),
      title: todo,
      done: false,
    }

    setTodos((prevState) => [...prevState, newTodo])
  }

  return (
    <View style={styles.container}>
      <Form addTodo={handleAddTodo} />
    </View>
  )
}
