import { Container, Icon, Text, Title } from "./style"

export function EmptyTodoList() {
  return (
    <Container>
      <Icon />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <Text>Crie tarefas e organize seus itens a fazer</Text>
    </Container>
  )
}
