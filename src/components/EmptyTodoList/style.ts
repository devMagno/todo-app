import styled from "styled-components/native"
import Ionicons from "@expo/vector-icons/Ionicons"

export const Container = styled.View`
  align-items: center;

  padding: 48px 0;
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GRAY_350,
  name: "document-text-outline",
}))`
  margin-bottom: 16px;
`

export const Title = styled.Text`
  font-size: 14px;
  line-height: 19.6px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILIES.BOLD};
`

export const Text = styled.Text`
  font-size: 14px;
  line-height: 19.6px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILIES.REGULAR};
`
