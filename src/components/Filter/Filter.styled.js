import styled from 'styled-components';

export const FilterTitle = styled.label`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: ${({ theme }) => `${theme.spacing(3)}`};
`

export const FilterInput = styled.input`
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  margin-top: ${({ theme }) => `${theme.spacing(2)}`};
  border: 1px solid ${({ theme }) => `${theme.colors.black}`};
  border-radius: ${({ theme }) => `${theme.spacing(1)}`};
  font-family: sans-serif;
  font-size: ${({theme})=>`${theme.fontSizes[2]}`};
  outline: none;
`