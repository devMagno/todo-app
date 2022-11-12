import { useState } from "react"
import { useTheme } from "styled-components/native"
import Ionicons from "@expo/vector-icons/Ionicons"

import { Button, Container, Input } from "./styles"

interface FormProps {
  addTodo: (todo: string) => void
}

export function Form({ addTodo }: FormProps) {
  const theme = useTheme()

  const [todo, setTodo] = useState("")

  function handleAddTodo(title: string) {
    addTodo(title)
    setTodo("")
  }

  return (
    <Container>
      <Input
        value={todo}
        onChangeText={setTodo}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.COLORS.GRAY_300}
      />

      <Button onPress={() => handleAddTodo(todo)}>
        <Ionicons
          name="add-circle-outline"
          size={16}
          color={theme.COLORS.GRAY_100}
        />
      </Button>
    </Container>
  )
}
