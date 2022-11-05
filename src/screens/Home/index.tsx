import { useState } from "react"
import { Alert, ScrollView, Text, View } from "react-native"

import { Form } from "../../components/Form"

import { styles } from "./styles"

import { Todo } from "../../types/Todo"
import { TodoItem } from "../../components/TodoItem"

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAddTodo(title: string) {
    const newTodo: Todo = {
      id: String(new Date().getTime()),
      title: title,
      done: false,
    }

    setTodos((prevState) => [...prevState, newTodo])
  }

  function handleRemoveTodo(todo: Todo) {
    Alert.alert(
      "Remover tarefa",
      `Tem certeza que deseja remover a tarefa ${todo.title}?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setTodos((prevState) =>
              prevState.filter((item) => item.id !== todo.id)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Form addTodo={handleAddTodo} />

      <ScrollView>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={handleRemoveTodo} />
        ))}
      </ScrollView>
    </View>
  )
}
