import { useState } from "react"
import { TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

import { styles } from "./styles"

interface FormProps {
  addTodo: (todo: string) => void
}

export function Form({ addTodo }: FormProps) {
  const [todo, setTodo] = useState("")

  function handleAddTodo(title: string) {
    addTodo(title)
    setTodo("")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddTodo(todo)}
      >
        <Ionicons name="add-circle-outline" size={16} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  )
}
