import styled from 'styled-components';
import { rem } from 'polished';

export const Heading = styled.h1`
  margin: 0;
  font-size: ${rem('72px')};
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
  letter-spacing: ${rem('1px')};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: ${rem('48px')};
  }
`;

export const SubHeading = styled.h2<{ gutterBottom?: boolean }>`
  font-size: ${rem('52px')};
  color: ${(props) => props.theme.colors.white};
  letter-spacing: ${rem('2px')};
  margin-bottom: ${rem('80px')};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: ${rem('32px')};
  }
`;

export const Title = styled.h3`
  font-size: ${rem('24px')};
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
`;

export const BoldText = styled.p`
  font-size: ${rem('18px')};
  color: ${(props) => props.theme.colors.faintBlue};
  font-weight: 600;
`;

export const Paragraph = styled.p`
  font-size: ${rem('18px')};
  color: ${(props) => props.theme.colors.white};
  white-space: break-spaces;
`;
