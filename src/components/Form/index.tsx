import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

interface FormProps {
  addTodo: (todo: string) => void
}

export function Form({ addTodo }: FormProps) {
  const [todo, setTodo] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sua lista de tarefas</Text>
      <View style={styles.formWrapper}>
        <TextInput
          style={styles.input}
          value={todo}
          onChangeText={setTodo}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={() => addTodo(todo)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
