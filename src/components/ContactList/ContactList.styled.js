import styled from 'styled-components';

export const List = styled.ul`
  
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => `${theme.spacing(2)}`};
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}`};
  width: 400px;
`