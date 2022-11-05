import { useState } from "react"
import { Alert, ScrollView, Text, View } from "react-native"

import { Form } from "../../components/Form"

import { styles } from "./styles"

import { Todo } from "../../types/Todo"
import { TodoItem } from "../../components/TodoItem"

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", done: false, title: "Fazer café" },
  ])

  function handleAddTodo(title: string) {
    if (title) {
      const newTodo: Todo = {
        id: String(new Date().getTime()),
        title: title,
        done: false,
      }

      return setTodos((prevState) => [...prevState, newTodo])
    }

    return Alert.alert("Opa!", "Você precisa informar o título da tarefa")
  }

  function handleRemoveTodo(todo: Todo) {
    Alert.alert(
      "Remover tarefa",
      `Tem certeza que deseja remover a tarefa '${todo.title}'?`,
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

  function handleToggleTodoDone(todo: Todo) {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, done: !item.done } : item
    )

    setTodos(updatedTodos)
  }

  return (
    <View style={styles.container}>
      <Form addTodo={handleAddTodo} />

      <ScrollView>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={handleRemoveTodo}
            onToggleDone={handleToggleTodoDone}
          />
        ))}
      </ScrollView>
    </View>
  )
}
