import { Text, TouchableOpacity, View } from "react-native"
import CheckBox from "expo-checkbox"

import { Todo } from "../../types/Todo"

import { styles } from "./styles"

interface TodoItemProps {
  todo: Todo
  onRemove: (todo: Todo) => void
  onToggleDone: (todo: Todo) => void
}

export function TodoItem({ todo, onRemove, onToggleDone }: TodoItemProps) {
  return (
    <View style={styles.container}>
      <CheckBox
        style={styles.checkbox}
        value={todo.done}
        onValueChange={() => onToggleDone(todo)}
        color={todo.done ? "#31cf67" : undefined}
      />

      <Text
        style={todo.done ? [styles.title, styles.strikethrough] : styles.title}
      >
        {todo.title}
      </Text>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemove(todo)}
      >
        <Text style={styles.removeButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
