import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  padding-top: ${({ theme }) => `${theme.spacing(3)}`};
  padding-bottom: ${({ theme }) => `${theme.spacing(3)}`};
  padding-left: ${({ theme }) => `${theme.spacing(4)}`};
  padding-right: ${({ theme }) => `${theme.spacing(4)}`};
  width: 80px;
  border: none;
  border-radius: ${({ theme }) => `${theme.spacing(1)}`};
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  color: ${({ theme }) => `${theme.colors.white}`};
  font-size: inherit;
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 3250ms;
  :hover,
  :focus {
    background-color: ${({ theme }) => `${theme.colors.hover}`};
  }
`;