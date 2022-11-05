import { Text, TouchableOpacity, View } from "react-native"

import { Todo } from "../../types/Todo"

import { styles } from "./styles"

interface TodoItemProps {
  todo: Todo
  onRemove: (todo: Todo) => void
}

export function TodoItem({ todo, onRemove }: TodoItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemove(todo)}
      >
        <Text style={styles.removeButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
