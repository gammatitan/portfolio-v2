import { rem } from 'polished';
import styled from 'styled-components';
import Button from '../../../components/Button';
import ExternalUrl from '../../../components/ExternalLink';

export const HeroButton = styled(Button)`
  margin-top: ${rem('56px')};
`;

export const ContactEmail = styled(ExternalUrl)`
  color: ${(props) => props.theme.colors.blue};
`;
