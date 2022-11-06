import { useState } from "react"
import { Alert, FlatList, Image, Text, View } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

import { Form } from "../../components/Form"

import { styles } from "./styles"

import { Todo } from "../../types/Todo"
import { TodoItem } from "../../components/TodoItem"

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAddTodo(title: string) {
    if (title) {
      const newTodo: Todo = {
        id: String(new Date().getTime()),
        title: title,
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/logo.png")} />
      </View>

      <Form addTodo={handleAddTodo} />

      <View style={styles.content}>
        <View style={styles.listHeader}>
          <View style={styles.listHeaderItem}>
            <Text style={styles.created}>Criadas</Text>
            <View style={styles.count}>
              <Text style={styles.countText}>{todos.length}</Text>
            </View>
          </View>
          <View style={styles.listHeaderItem}>
            <Text style={styles.done}>Concluídas</Text>
            <View style={styles.count}>
              <Text style={styles.countText}>
                {todos.filter((todo) => todo.done).length}
              </Text>
            </View>
          </View>
        </View>

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
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Ionicons
                style={styles.emptyListIcon}
                name="document-text-outline"
                color="#3d3d3d"
                size={56}
              />
              <Text style={[styles.emptyListText, styles.emptyListTextBold]}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
