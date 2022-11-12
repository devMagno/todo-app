import { Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "styled-components/native"
import Ionicons from "@expo/vector-icons/Ionicons"

import { Todo } from "../../types/Todo"

import { Container, CustomCheckbox, RemoveButton, Title } from "./styles"

interface TodoItemProps {
  todo: Todo
  onRemove: (todo: Todo) => void
  onToggleDone: (todo: Todo) => void
}

export function TodoItem({ todo, onRemove, onToggleDone }: TodoItemProps) {
  const theme = useTheme()

  return (
    <Container>
      <CustomCheckbox
        value={todo.done}
        onValueChange={() => onToggleDone(todo)}
        color={todo.done ? theme.COLORS.DARK_PURPLE : theme.COLORS.BLUE}
      />

      <Title isActive={todo.done}>{todo.title}</Title>

      <RemoveButton onPress={() => onRemove(todo)}>
        <Ionicons
          name="trash-outline"
          size={18}
          color={theme.COLORS.GRAY_300}
        />
      </RemoveButton>
    </Container>
  )
}
