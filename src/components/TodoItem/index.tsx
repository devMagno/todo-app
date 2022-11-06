import { Text, TouchableOpacity, View } from "react-native"
import CheckBox from "expo-checkbox"
import Ionicons from "@expo/vector-icons/Ionicons"

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
        color={todo.done ? "#5E60CE" : "#4EA8DE"}
        children={<p>a</p>}
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
        <Ionicons name="trash-outline" size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
