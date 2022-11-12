import styled, { css } from "styled-components/native"

interface LabelStyleProps {
  type: "CREATED" | "DONE"
}

export const Container = styled.View`
  margin-bottom: 20px;

  flex-direction: row;
  justify-content: space-between;
`

export const LabelWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Label = styled.Text<LabelStyleProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILIES.BOLD};
  color: ${({ theme, type }) =>
    type === "CREATED" ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
`

export const CountWrapper = styled.View`
  margin-left: 8px;

  padding: 2px 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Count = styled.Text`
  font-size: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILIES.BOLD};
  `}
`
