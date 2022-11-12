import { useState } from "react"
import { Alert, FlatList } from "react-native"

import { Form } from "../../components/Form"
import { TodoItem } from "../../components/TodoItem"
import { Header } from "../../components/Header"
import { TodoListHeader } from "../../components/TodoListHeader"
import { EmptyTodoList } from "../../components/EmptyTodoList"

import { Container, Content } from "./styles"

import { Todo } from "../../types/Todo"

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAddTodo(title: string) {
    if (title.trim()) {
      const newTodo: Todo = {
        id: String(new Date().getTime()),
        title: title.trim(),
        done: false,
      }

      return setTodos((prevState) => [newTodo, ...prevState])
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
    const updatedTodos = todos
      .map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
      .sort((a, b) => Number(a.done) - Number(b.done))

    setTodos(updatedTodos)
  }

  return (
    <Container>
      <Header />

      <Form addTodo={handleAddTodo} />

      <Content>
        <TodoListHeader
          total={todos.length}
          done={todos.filter((todo) => todo.done).length}
        />

        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              key={item.id}
              todo={item}
              onRemove={handleRemoveTodo}
              onToggleDone={handleToggleTodoDone}
            />
          )}
          ListEmptyComponent={<EmptyTodoList />}
        />
      </Content>
    </Container>
  )
}
