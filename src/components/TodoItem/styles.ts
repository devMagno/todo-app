import styled, { css } from "styled-components/native"
import Checkbox from "expo-checkbox"

interface TitleStyleProps {
  isActive: boolean
}

export const Container = styled.View`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  padding: 12px 8px 12px 16px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_400};
    background-color: ${theme.COLORS.GRAY_500};
  `}
`

export const CustomCheckbox = styled(Checkbox)`
  width: 18px;
  height: 18px;
  border-radius: 18px;
`

export const Title = styled.Text<TitleStyleProps>`
  flex: 1;
  margin-left: 12px;
  margin-right: 8px;

  font-size: 14px;

  ${({ theme, isActive }) => css`
    font-family: ${theme.FONT_FAMILIES.REGULAR};
    text-decoration: ${isActive ? "line-through" : "none"};
    color: ${isActive ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
  `}
`

export const RemoveButton = styled.TouchableOpacity`
  width: 32px;
  align-items: center;
  justify-content: center;
`
