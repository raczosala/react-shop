import styled from 'styled-components';

const CenteredContainer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  width: 90%;
  margin: 0 auto;
  padding: 0 20px;
`;

export default CenteredContainer;