import styled from 'styled-components';
import { rem } from 'polished';
import Typography from '../../components/Typography';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: ${rem('500px')};
  text-align: center;
  margin: 0 auto;

  img {
    margin-bottom: ${rem('8px')};
  }
`;

export const Title = styled(Typography).attrs({ variant: 'subheading' })`
  margin-bottom: ${rem('24px')};
`;
