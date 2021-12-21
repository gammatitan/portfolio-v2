import { rem } from 'polished';
import styled from 'styled-components';
import { BoldText } from '../Typography/styles';

export const StyledProjectsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${rem('40px')};
  row-gap: ${rem('40px')};
  margin: 0;
  padding: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCardAnchor = styled.a`
  display: block;
  position: relative;
  border: ${rem('2px')} solid ${(props) => props.theme.colors.lightBlue};
  border-radius: ${rem('8px')};
  padding: 24px;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    border-color: ${(props) => props.theme.colors.white};
    transform: translateY(-${rem('2px')});

    .project-card__client,
    .project-card__secondaryText {
      color: ${(props) => props.theme.colors.white};
    }

    .icon-folder__back-path {
      transform: translate(0, -22px);
    }

    path {
      stroke: ${(props) => props.theme.colors.white};
    }
  }
`;

export const ProjectCardSvgWrapper = styled.div`
  & path {
    fill: none;
    stroke: ${(props) => props.theme.colors.lightBlue};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: ${rem('32px')};
    transition: all 0.2s ease;
  }
`;

export const ProjectCardContentWrapper = styled.div`
  margin-top: ${rem('16px')};
`;

export const ProjectCardContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
`;

export const ProjectCardSecondaryText = styled(BoldText)`
  position: absolute;
  top: ${rem('8px')};
  right: ${rem('16px')};
  font-size: ${rem('14px')};
  transition: all 0.2s ease;
`;

export const ProjectCardClient = styled(BoldText)`
  margin: 0 0 ${rem('4px')};
  transition: all 0.2s ease;
`;
