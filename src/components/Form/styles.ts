import styled, { css } from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;

  margin-top: -30px;
  margin-bottom: 33px;
`

export const Input = styled.TextInput`
  flex: 1;
  height: 54px;
  padding: 16px;
  margin-right: 4px;
  border-radius: 6px;

  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILIES.REGULAR};

    border: 2px solid ${theme.COLORS.GRAY_700};
    background-color: ${theme.COLORS.GRAY_500};
  `}
`

export const Button = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`
