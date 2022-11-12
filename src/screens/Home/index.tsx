import { useEffect, useState } from "react"
import { Alert, FlatList } from "react-native"

import { Form } from "../../components/Form"
import { TodoItem } from "../../components/TodoItem"
import { Header } from "../../components/Header"
import { TodoListHeader } from "../../components/TodoListHeader"
import { EmptyTodoList } from "../../components/EmptyTodoList"
import { Loading } from "../../components/Loading"

import { Container, Content } from "./styles"

import { todoGetAll } from "../../storage/todo/todoGetAll"
import { todoCreate } from "../../storage/todo/todoCreate"
import { todoToggleDone } from "../../storage/todo/todoToggleDone"
import { todoRemove } from "../../storage/todo/todoRemove"

import { Todo } from "../../utils/Todo"
import { AppError } from "../../utils/AppError"

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  async function handleAddTodo(title: string) {
    if (!title.trim())
      return Alert.alert("Opa!", "Você precisa informar o título da tarefa")

    const newTodo: Todo = {
      id: String(new Date().getTime()),
      title: title.trim(),
      done: false,
    }

    try {
      await todoCreate(newTodo)

      fetchTodos()
    } catch (error) {
      if (error instanceof AppError) Alert.alert("Nova tarefa", error.message)
      else
        Alert.alert(
          "Nova tarefa",
          "Não foi possível adicionar a tarefa, tente novamente mais tarde."
        )

      console.log(error)
    }
  }

  async function removeTodo(id: Todo["id"]) {
    try {
      await todoRemove(id)

      fetchTodos()
    } catch (error) {
      Alert.alert("Remover tarefa", "Não foi possível remover essa tarefa.")

      console.log(error)
    }
  }

  function handleRemoveTodo(todo: Todo) {
    Alert.alert(
      "Remover tarefa",
      `Tem certeza que deseja remover a tarefa '${todo.title}'?`,
      [
        {
          text: "Sim",
          onPress: () => removeTodo(todo.id),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    )
  }

  async function handleToggleTodoDone(todo: Todo) {
    try {
      await todoToggleDone(todo.id)

      fetchTodos()
    } catch (error) {
      Alert.alert("Atualizar tarefa", "Não foi possível atualizar essa tarefa.")

      console.log(error)
    }
  }

  async function fetchTodos() {
    try {
      const todos = await todoGetAll()
      setTodos(todos)
    } catch (error) {
      Alert.alert("Tarefas", "Não foi possível carregas as tarefas")
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <Container>
      <Header />

      <Form addTodo={handleAddTodo} />

      <Content>
        <TodoListHeader
          total={todos.length}
          done={todos.filter((todo) => todo.done).length}
        />

        {isLoading ? (
          <Loading />
        ) : (
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
        )}
      </Content>
    </Container>
  )
}
