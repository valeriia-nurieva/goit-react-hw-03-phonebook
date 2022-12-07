import styled from 'styled-components';

const Layout = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing(3)}`};
`;

export default Layout;
