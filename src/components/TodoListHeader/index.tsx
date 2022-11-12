import { Text } from "react-native"

import { Container, Count, CountWrapper, Label, LabelWrapper } from "./style"

interface TodoListHeaderProps {
  total: number
  done: number
}

export function TodoListHeader({ total, done }: TodoListHeaderProps) {
  return (
    <Container>
      <LabelWrapper>
        <Label type="CREATED">Criadas </Label>
        <CountWrapper>
          <Count>{total}</Count>
        </CountWrapper>
      </LabelWrapper>
      <LabelWrapper>
        <Label type="DONE">Concluídas </Label>
        <CountWrapper>
          <Count>{done}</Count>
        </CountWrapper>
      </LabelWrapper>
    </Container>
  )
}
