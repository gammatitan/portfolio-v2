import styled from 'styled-components';
import { rem } from 'polished';
import ExternalUrl from '../ExternalLink';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${rem('40px')};
`;

export const FooterIcons = styled.div`
  display: flex;
`;

export const FooterIcon = styled(ExternalUrl)`
  display: block;
  width: ${rem('32px')};
  height: ${rem('32px')};
  margin-left: ${rem('24px')};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
