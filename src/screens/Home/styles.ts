import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK_BACKGROUND};
`

export const Content = styled.View`
  padding: 0 24px;
`
